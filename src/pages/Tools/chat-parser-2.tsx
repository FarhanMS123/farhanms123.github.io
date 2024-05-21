import { Button, Divider, Dropdown, Input, Option, Tab, TabList, Textarea, makeStyles, mergeClasses } from "@fluentui/react-components";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ArrowSortUpFilled, ArrowSortDownFilled, DeleteRegular } from "@fluentui/react-icons";
import normRE from "@/utils";

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
    }
});

export type RoleFormat = { role: string; format: string; regex: [string, string]; is_role: boolean; };
export const defaultRoles: RoleFormat[] = [
    {
        is_role: false, role: "alpaca", format: "^Below is an instruction that describes a task. Write a response that appropriately completes the request.\n\n", 
        regex: ["Below is an instruction that describes a task. Write a response that appropriately completes the request\.\n\nsystem\:", "gs"] 
    },
    { is_role: true, role: "system", format: "system: {{prompt}}\n", regex: ["(?<=system: ).*(?=\nuser:)", "gs"] },
    { is_role: true, role: "user", format: "user: {{prompt}}\n", regex: ["(?<=user: ).*(?=\nassistant:)", "gs"] },
    { is_role: true, role: "assistant", format: "assistant: {{prompt}}\n", regex: ["(?<=sassistant: ).*(?=\nuser:)", "gs"] },
];
export type ChatFormat = { role: string; content: string; is_role: boolean; };

export default function ChatParser2() {
    const styles = useChatParserStyles();
    const [leftPanel, setLeftPanel] = useState<"chat" | "roles">("chat");
    const [rightPanel, setRightPanel] = useState<"raw" | "json">("raw");
    const [roles, setRoles] = useState<RoleFormat[]>(defaultRoles);
    const [chat, setChat] = useState<ChatFormat[]>([]);

    return <div className={styles.root}>
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
    </div>;
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
}) => (
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
                <Textarea className={styles.bubbleTextarea} appearance="filled-darker" resize="vertical" value={r.format} onChange={(ev, data) => {
                    setRoles(r => {
                        r[i].format = data.value;
                        return [...r];
                    })
                }}/>
            </div>
        ) }
    </div>
);

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
        let text = parsed;
        const parsing: ChatFormat[] = [];
        
        while (text.length > 0) {
            let pos_i = -1;
            let template: RoleFormat | null = null;
            for (const role of roles) {
                const re = RegExp(normRE(role.format).replace(normRE("{{prompt}}"), ".*"));
                const temp_i = text.search(re);
                if (pos_i < 0 && temp_i >=0) {
                    pos_i = temp_i;
                    template = role;
                }
                if (temp_i >= 0 && pos_i >= 0 && temp_i < pos_i) {
                    pos_i = temp_i;
                    template = role;
                }
            }
            if (pos_i < 0 || pos_i > 0) {
                parsing.push({role: "", content: text.slice(0, pos_i < 0 ? text.length : pos_i), is_role: false});
                text = text.slice(pos_i < 0 ? text.length : pos_i);
            } else {
                const part1 = template!.format.slice(0,template!.format.search(RegExp(normRE("{{prompt}}"))));
                const part2 = template!.format.slice(part1.length + "{{prompt}}".length);
                parsing.push({ role: template!.role, content: text.slice(part1.length, text.search(RegExp(normRE(part2)))), is_role: template!.is_role });
                text = text.slice(text.search(RegExp(normRE(part2))) + part2.length);
            }
        }

        return parsing;
    }

    return (
        <div className={styles.chatContainer}>
            <Textarea className={styles.bubbleTextarea} appearance="filled-darker" resize="vertical" value={parsed} onChange={(ev, data) => setParsed(data.value)} />
            <div className={styles.bubbleAddRoleContainer}>
                <Button appearance="primary" onClick={() => setChat(parse())}>Parse</Button>
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