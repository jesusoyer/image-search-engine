import React from "react";
class ImageCard extends React.Component{
    render(){
        //destructoring the prop
        const{description,urls} = this.props.image;

        return (
            <div>
                <img 
                alt={description}
                src={urls.regular} 
                />
          </div>
        );
    }
}

export default ImageCard;