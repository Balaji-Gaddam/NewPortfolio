import React from 'react'

const ProgressBar = ({done,background,boxShadow}) => {
    // const ColorData=[
    //     {
           
    //     }
    // ]



	const [style, setStyle] = React.useState({background});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`,
            background:background,
		}
		
		setStyle(newStyle);
	},200);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div> 
		</div>
	)
}

export default ProgressBar

