

import { TableRow } from './TableRow';

export const UploadsTable = (props) =>{

  
    return(
        <>
        <div className= {props.showTable?"uploadsTableWrapper uploadsTableWrapperShow":"uploadsTableWrapper"}>
            <p>Uploads</p>
            <div className="tableWrapper">
                <table className="dataTable">
                    <thead> 
                    <tr>
                        <th className="tableHead">Sl No.</th>
                        <th className="tableHead">Links</th>
                        <th className="tableHead">Prefix</th>
                        <th className="tableHead">Add Tags</th>
                        <th className="tableHead">Selected Tags</th>
                    </tr>

                    </thead>
                   <tbody>
                    
                    {props.data.map((rowData,index) => (
                        <TableRow key = {index} data={rowData} />
                    ))}
                  
                    
                    

                   </tbody>
                   
                </table>
            </div>
        </div>
        </>
    )
}