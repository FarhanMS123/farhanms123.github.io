# Web-based Document Format
> Nov, 24 2024

## Conversion

- Web Document File (WDF)
- Web-Document File
- Open Document Format (ODF)
- Open Web Format (OWF)
- Web-based Document Format
- .zip -> .wdf / .odf
- 1 compressed just have 1 page, 1 sql

## Feature
- Pageless, Borderless, Full-width
- Read-Only, Interactive, Writeable
- Template, Content
- Section, Page Break, Header

## Scheme

```yaml
root:
section:
page:
   template:
   content:
```

```yaml
root:
	templates:
		- template:
				name: string
				width: string
				height: width
				padding: [0, 0, 0, 0]
	section:
		_: ['name', '']
		page:
			_:
				name: ''
				tags: [string] # paper, slide, sheet, board
				view:
					pageless: boolean
					borderless: boolean
					full-width: boolean # false: page size
				mode: read-only | interactive | writeable 
			template: string
			content: []
```

```xml
<root>
</root>
```

## Notes
- replacing: Word, Excels, Powerpoint,
- Notes: Notion, OneNote, Evernote
- Productivity: Trello, Jira, 
- Form: GForm, 
- Blog: Sharepoint
