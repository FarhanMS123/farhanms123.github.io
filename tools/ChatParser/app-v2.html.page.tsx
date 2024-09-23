import { Button, Divider, Dropdown, Input, MenuItem, MenuItemCheckbox, MenuList, Option, Tab, TabList, Textarea, makeStyles, mergeClasses } from "@fluentui/react-components";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { ArrowSortUpFilled, ArrowSortDownFilled, DeleteRegular } from "@fluentui/react-icons";
import TextareaMenu from "~/libs/TextareaMenu";
import { sample1_x1, sample2_x4 } from "./test-chat-parser-2";
import { Providers } from "~/libs/fui_docs/Providers";

export const useChatParserStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "row",
    },
    panel: {
        width: "100%",
    },
    chatContainer: {
        // marginTop: "1rem",
        width: "calc(100% - 2rem)",
        padding: "1rem",
        maxHeight: "calc(100vh - 6rem)",
        overflowY: "auto",
    },
    bubbleContainer: {
        padding: "0.5rem 0rem"
    },
    bubbleHead: {
        display: "flex",
        justifyContent: "space-between",
        "& .del": {
            marginLeft: "1rem",
        },
    },
    bubbleTextarea: {
        width: "100%",
        marginTop: "1rem",
        "& textarea": {
            maxHeight: "none !important",
        },
    },
    bubbleDivider: {
        padding: "1rem 0rem"
    },
    bubbleAddRoleContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "right",
        gap: "0.5rem",
    },
    mt1rem: {
        marginTop: "1rem",
    },
    w100: {
        width: "100%",
    },
    content_space_between: {
        justifyContent: "space-between",
    },
});

/**
 * v1 simple
 * v2 regex
 * v3 stage
 * https://regex101.com/
 * ==========
 * (?<=user\: ).*(?=\nassistant\:)
 * (?<=user\: ).*(?=\nassistant\:)
 * ((?<=user\: ).*(?=\nassistant\:)|(?<=user\: ).*$)
 * (?<=user\: ).*((?=\nassistant\:)|(?=\n)$)
 * (?<=user: ).*?(?=\n(assistant:|user:))
 * (?<=user: ).*?(?=\n(assistant:|user:|$))
 * 
 * (?<=user\: ).*((?=\nassistant\:)|$)
 * (?<=user\: ).*(?=(\nassistant\:|\Z$))
 */

export type RoleFormat = { role: string; format: string; regex: [string, string]; is_role: boolean; };
export const defaultRoles: RoleFormat[] = [
    {
        is_role: false, role: "alpaca", format: "Below is an instruction that describes a task. Write a response that appropriately completes the request.\n\n", 
        regex: ["Below is an instruction that describes a task. Write a response that appropriately completes the request\\.\\n\\nsystem:", "gs"] 
    },
    { is_role: true, role: "system", format: "system: {{prompt}}\n", regex: ["(?<=system: ).*?(?=\\n(assistant:|user:|$))", "gs"] },
    { is_role: true, role: "user", format: "user: {{prompt}}\n", regex: ["(?<=user: ).*?(?=\\n(assistant:|user:|$))", "gs"] },
    { is_role: true, role: "assistant", format: "assistant: {{prompt}}\n", regex: ["(?<=assistant: ).*?(?=\\n(assistant:|user:|$))", "gs"] },
];
export type ChatFormat = { role: string; content: string; is_role: boolean; };

export default function ChatParser2() {
    const styles = useChatParserStyles();
    const [leftPanel, setLeftPanel] = useState<"chat" | "roles">("chat");
    const [rightPanel, setRightPanel] = useState<"raw" | "json">("raw");
    const [roles, setRoles] = useState<RoleFormat[]>(defaultRoles);
    const [chat, setChat] = useState<ChatFormat[]>([]);

    return <Providers>
        <div className={styles.root}>
            <div className={styles.panel}>
                <TabList selectedValue={leftPanel} onTabSelect={(ev, data) => setLeftPanel(data.value as typeof leftPanel)}>
                    <Tab value="chat">Chat</Tab>
                    <Tab value="roles">Roles</Tab>
                </TabList>
                { leftPanel == "chat" && <PanelChat {...{chat, setChat, styles, roles}} /> }
                { leftPanel == "roles" && <PanelRoles {...{setRoles, setChat, styles, roles}} /> }
            </div>
            <div className={styles.panel}>
                <TabList selectedValue={rightPanel} onTabSelect={(ev, data) => setRightPanel(data.value as typeof rightPanel)}>
                    <Tab value="raw">Raw</Tab>
                    <Tab value="json">JSON Role</Tab>
                </TabList>
                { rightPanel == "raw" && <PanelRaw {...{chat, setChat, styles, roles}} /> }
                { rightPanel == "json" && <PanelJsonRole {...{chat, setChat, styles}} /> }
            </div>
        </div>
    </Providers>;
}

export const PanelChat = ({ styles, chat, setChat, roles }: {
    styles: ReturnType<typeof useChatParserStyles>;
    chat: ChatFormat[];
    setChat: Dispatch<SetStateAction<ChatFormat[]>>;
    roles: RoleFormat[];
}) => (
    <div className={styles.chatContainer}>
        { chat.map((c, i) => 
            <div key={i} className={styles.bubbleContainer}>
                <div className={styles.bubbleHead}>
                    <Dropdown size="small" value={c.role} onOptionSelect={(ev, data) => setChat(c => {
                        c[i].role = data.optionValue!;
                        return [...c];
                    })}>
                        {roles.map(x => 
                            <Option key={x.role}>{x.role}</Option>
                        )}
                    </Dropdown>
                    <div>
                        <Button icon={<ArrowSortUpFilled />} size="small" onClick={() => setChat(c => {
                            if (i == 0) return c;
                            const t = c[i-1];
                            c[i-1] = c[i];
                            c[i] = t;
                            return [...c];
                        })} />
                        <Button icon={<ArrowSortDownFilled />} size="small" onClick={() => setChat(c => {
                            if (i == c.length - 1) return c;
                            const t = c[i+1];
                            c[i+1] = c[i];
                            c[i] = t;
                            return [...c];
                        })} />
                        <Button icon={<DeleteRegular />} size="small" className="del" onClick={() => {
                            setChat(c => c.filter((c, j) => j != i))
                        }} />
                    </div>
                </div>
                <Textarea className={styles.bubbleTextarea} appearance="filled-darker" value={c.content} resize="vertical" onChange={(ev, data) => {
                    setChat(c => {
                        c[i].content = data.value;
                        return [...c];
                    })
                }}/>
            </div>
        ) }
        <Divider className={styles.bubbleDivider} />
        <div className={styles.bubbleAddRoleContainer}>
            {roles.map(x => 
                <Button key={x.role} appearance="primary" size="small" onClick={() => {
                    setChat(c => {
                        c.push({ role: x.role, content: "", is_role: x.is_role });
                        return [...c];
                    })
                }}>{x.role}</Button>
            )}
        </div>
    </div>
);

export const PanelRoles = ({ styles, setRoles, setChat, roles }: {
    styles: ReturnType<typeof useChatParserStyles>;
    setRoles: Dispatch<SetStateAction<RoleFormat[]>>;
    setChat: Dispatch<SetStateAction<ChatFormat[]>>;
    roles: RoleFormat[];
}) => {
    return (
        <div className={styles.chatContainer}>
            <div className={styles.bubbleAddRoleContainer}>
                <Button appearance="primary" size="small" onClick={() => {
                    setRoles(r => {
                        r.push({ role: "new_role", format: "", is_role: true, regex: ["^$", "gs"] });
                        return [...r];
                    })
                }}>Add Roles</Button>
            </div>
            <Divider className={styles.bubbleDivider} />
            { roles.map((r, i) => 
                <div key={i} className={styles.bubbleContainer}>
                    <div className={styles.bubbleHead}>
                        <Input value={r.role} />
                        <Button icon={<DeleteRegular />} size="small" className="del" onClick={() => {
                            setRoles(r => r.filter((r, j) => j != i))
                        }} />
                    </div>
                    <Textarea className={styles.bubbleTextarea} appearance="filled-darker" resize="vertical" value={r.format} onChange={(ev, data) => {
                        setRoles(r => {
                            r[i].format = data.value;
                            return [...r];
                        })
                    }}/>
                    <TextareaMenu
                    className={styles.bubbleTextarea}
                    attrMenu={{
                        checkedValues: r.is_role ? {is_role:["is_role"]} : {},
                        onCheckedValueChange: (e, { name, checkedItems }) => setRoles(ro => {
                            console.log([r, name, checkedItems, checkedItems.findIndex((v) => v == "is_role")])
                            if (name == "is_role") {
                                ro[i].is_role = checkedItems.findIndex((v) => v == "is_role") >= 0;
                                return [...ro];
                            }
                            return ro;
                        }),
                    }}
                    menu={
                        <MenuList>
                            <MenuItemCheckbox name="is_role" value="is_role">is_role</MenuItemCheckbox>
                            <MenuItem persistOnClick={true}>
                                <Input value={r.regex[1]} onChange={(ev, data) => {
                                    setRoles(r => {
                                        r[i].regex[1] = data.value;
                                        return [...r];
                                    })
                                }} />
                            </MenuItem>
                        </MenuList>
                    } >
                        <Textarea appearance="filled-darker" resize="vertical" className={styles.w100} value={r.regex[0]} onChange={(ev, data) => {
                            setRoles(r => {
                                r[i].regex[0] = data.value;
                                return [...r];
                            })
                        }} />
                    </TextareaMenu>
                </div>
            ) }
        </div>
    );
}

export const PanelRaw = ({ styles, chat, setChat, roles }: {
    styles: ReturnType<typeof useChatParserStyles>;
    chat: ChatFormat[];
    setChat: Dispatch<SetStateAction<ChatFormat[]>>;
    roles: RoleFormat[];
}) => {
    const [parsed, setParsed] = useState(combine());
    useEffect(() => {
        if (JSON.stringify(chat) != JSON.stringify(parse())) 
            setParsed(combine());
    }, [chat]);

    function combine() {
        const r: Record<string, RoleFormat> = {};
        for(const role of roles) r[role.role] = role;

        let text = "";
        for(const msg of chat)
            text += r[msg.role].format.replace("{{prompt}}", msg.content);

        return text;
    }

    function parse() {
        const parsing: (ChatFormat & { index: number; })[] = [];

        for (const role of roles) {
            /// @ts-ignore
            const matches: RegExpExecArray[] = [...parsed.matchAll(RegExp(role.regex[0], role.regex[1]))];
            for (const match of matches) {
                parsing.push({
                    role: role.role,
                    is_role: role.is_role,
                    index: match.index,
                    content: match[0],
                });
            }
        }

        return parsing.sort((a, b) => a.index - b.index);
    }

    return (
        <div className={styles.chatContainer}>
            <Textarea className={styles.bubbleTextarea} appearance="filled-darker" resize="vertical" value={parsed} onChange={(ev, data) => setParsed(data.value)} />
            <div className={mergeClasses(styles.bubbleAddRoleContainer, styles.content_space_between)}>
                <div className={styles.bubbleAddRoleContainer}>
                    <Button appearance="primary" onClick={() => setParsed(sample1_x1)}>sample1_x1</Button>
                    <Button appearance="primary" onClick={() => setParsed(sample2_x4)}>sample2_x4</Button>
                </div>
                <div className={styles.bubbleAddRoleContainer}>
                    <Button appearance="primary" onClick={() => setChat(parse())}>Parse</Button>
                </div>
            </div>
        </div>
    );
}

export const PanelJsonRole = ({ styles, chat, setChat }: {
    styles: ReturnType<typeof useChatParserStyles>;
    chat: ChatFormat[];
    setChat: Dispatch<SetStateAction<ChatFormat[]>>;
}) => {
    const [parsed, setParsed] = useState(JSON.stringify(chat, null, 2));

    useEffect(() => {
        if (JSON.stringify(chat) != JSON.stringify(JSON.parse(parsed))) 
            setParsed(JSON.stringify(chat, null, 2));
    }, [chat]);

    return (
        <div className={styles.chatContainer}>
            <Textarea className={styles.bubbleTextarea} appearance="filled-darker" resize="vertical" value={parsed} onChange={(ev, data) => setParsed(data.value)} />
            <div className={styles.bubbleAddRoleContainer}>
                <Button appearance="primary" onClick={() => setChat(JSON.parse(parsed))}>Parse</Button>
            </div>
        </div>
    );
}