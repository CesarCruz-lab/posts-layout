### Layout de usuário na sessão de postagens

__Dependências__

* React
* yarn
* @material-ui/core
* @material-ui/icons

__Absolute imports__

Arquivo na pasta raiz: ```jsconfig.json```

```json
{
	"compilerOptions": {
		"baseUrl": "src"
	},
	"include": ["src"]
}
```

__Material ui__

Exemplo de uso:

```javascript
import Button from '@material-ui/core/Button';

export function ButtonStyled(props) {
	const { css, ...rest } = props;
	
	const customStyle = {
		padding: '4px 8px',
		textTransform: 'capitalize',
		...css
	};
	
	return (
		<Button style={customStyle} {...rest} />
	);
}

```
