
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import React, { useState } from 'react';

export const TableRow = (props) => {
    // console.log(props.data);

    const [active, isActive] = useState(false);
    const [selectedTags, setSelectedTags] = useState([]);

    const handleOptionsClick = (e) => {
        const tagText = e.target.textContent;
        console.log(tagText);
        const updatedTags = [...selectedTags, tagText];
        setSelectedTags(updatedTags)
        isActive(false);
    }
    const handleRemoveTags = (e) =>{
        const removeTag = e.target.getAttribute('aria-label');
        console.log(removeTag);
        const updateSelectedTags = selectedTags.filter(tag => tag !== removeTag)
        setSelectedTags(updateSelectedTags)
    }

    const handleTagMenu = () =>{
        isActive(!active);
    }
    return (
        <>
          
          <tr className="tableData">
                        <td>
                            {props.data.id}
                        </td>
                        <td className = "link">
                            <a href={props.data.links} target="_blank">{props.data.links}</a>
                        </td>

                        <td>
                        {props.data.prefix}
                        </td>

                        <td>
                           <div  className="selectOptionWrapper">
                            <p onClick = {handleTagMenu} >Select Tags <span className = {active?"arrow":""}><IoIosArrowDown /></span></p>
                           
                            <ul className={active?"options options_show":"options"}>
                            {(props.data["select tags"].split(",")).map((option,key) =>(
                                <li key={key} onClick = {handleOptionsClick}>{option}</li>
                            ))}
                                
                            </ul>
                           </div>
                        </td>
                        <td>
                            <div className="selectedTags">
                                {selectedTags.map((tag,index) =>(
                                    <p key = {index} className="tag">{tag} <span aria-label={tag} ><RxCross2 className = "remove"  aria-label={tag} onClick = {handleRemoveTags} /></span></p>
                                ))}
                                
                            </div>
                        </td>
                    </tr>
                    <tr className="empty">
                        <td></td>
                    </tr>
        </>
    )
}