import React from 'react';

const DataTable = ({coinItems, handleFetchCoinItem}) =>  (
    <table className={'responsive-table striped highlight'} style={{background: '#fff'}}>
            <thead>
            <tr>
                <th>Display Name</th>
                <th>Base Currency</th>
                <th>Quote Currency</th>
                <th>Minimum Size</th>
                <th>Maximum Size</th>
                <th>Quote</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
                coinItems.map((item, key)=>{
                    return (
                        <tr key={key}>
                            <td>{item.display_name}</td>
                            <td>{item.base_currency}</td>
                            <td>{item.quote_currency}</td>
                            <td>{item.base_min_size}</td>
                            <td>{item.base_max_size}</td>
                            <td>{item.quote_increment}</td>
                            <td>
                                <button className={'waves-effect waves-light btn-small'} onClick={() => handleFetchCoinItem(item)}>View</button>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>

);
export default DataTable;
