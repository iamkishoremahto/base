

export const UploadsTable = () =>{
    return(
        <>
        <div className="uploadsTableWrapper">
            <p>Uploads</p>
            <div className="tableWrapper">
                <table className="dataTable">
                    <tr>
                        <th>Sl No.</th>
                        <th>Links</th>
                        <th>Prefix</th>
                        <th>Add Tags</th>
                        <th>Selected Tags</th>
                    </tr>
                    <tr className="tableData">
                        <td>
                            01
                        </td>
                        <td>
                            www.google.com
                        </td>

                        <td>
                            prefixSample
                        </td>

                        <td>
                            <select>
                                <option value="">Select Tags</option>
                                <option value="Tag1">Tag1</option>
                                <option value="Tag2">Tag2</option>
                                <option value="Tag3">Tag3</option>
                            </select>
                        </td>
                        <td>
                            <div className="selectedTags">
                                <p>TAG 1 <span>X</span></p>
                                <p>TAG 2 <span>X</span></p>
                                <p>TAG 1 <span>X</span></p>
                                <p>TAG 2 <span>X</span></p>
                                <p>TAG 1 <span>X</span></p>
                                <p>TAG 2 <span>X</span></p>
                                <p>TAG 1 <span>X</span></p>
                                <p>TAG 2 <span>X</span></p>
                                <p>TAG 1 <span>X</span></p>
                                <p>TAG 2 <span>X</span></p>
                                <p>TAG 1 <span>X</span></p>
                                <p>TAG 2 <span>X</span></p>
                                
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        </>
    )
}