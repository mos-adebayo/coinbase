import React, {Component} from 'react';
import axios from "axios";
import Header from './Header';

class HomepageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            activeCoinItem: null,
            coinItems: [],
            requesting: false
        }

    }

    componentDidMount(){
        this.fetchCoinItems();
    }

    fetchCoinItems = () => {
        const requesting = false;
        axios.get(`https://api.pro.coinbase.com/products`, {
            headers: { "Content-Type": "application/json" }
        }).then(res => {
                this.setState({coinItems: res.data, requesting});
            }).catch(function (error) {
                let errorMessage;
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    errorMessage = error.response.data.message;
                } else if (error.request) {
                    // The request was made but no response was received
                    errorMessage = error.request;
                } else {
                    // Something happened in setting up the request that triggered an Error
                    errorMessage = error.message;
                }
                window.alert(errorMessage);
                this.setState({requesting})
            });
    };

    fetchCoinItem = (event, activeCoinItem) =>{
        event.preventDefault();
        this.setState({ modalIsOpen: true, activeCoinItem})
    };
    showModal = (event) =>{
        event.preventDefault();
        this.setState({modalIsOpen: false});
    };
    render() {
        const { coinItems, modalIsOpen, activeCoinItem, requesting } = this.state;

        //Show loader on API Request
        if(requesting)
            return <p>Loading</p>;

        return (
            <div>
                <Header/>
                <div className="container">
                    <div className={`layout-content`}>
                        <div className="row">
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
                                                    <a href="/" onClick={(e) =>this.fetchCoinItem(e, item)}>View</a>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>

                    </div>

                    {/*Modal view for coin item */}
                    <div className={`modal ${(modalIsOpen ? 'open' : '')}`}>
                        {
                            activeCoinItem &&
                            <div>
                                <div className="modal-content">
                                    <h6 className={'truncate'}>{activeCoinItem.display_name}</h6>
                                    <table className={'striped centered'}>
                                        <thead>
                                            <tr>
                                                <th>Base Currency</th>
                                                <th>Quote Currency</th>
                                                <th>Minimum Size</th>
                                                <th>Maximum Size</th>
                                                <th>Quote</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{activeCoinItem.base_currency}</td>
                                                <td>{activeCoinItem.quote_currency}</td>
                                                <td>{activeCoinItem.base_min_size}</td>
                                                <td>{activeCoinItem.base_max_size}</td>
                                                <td>{activeCoinItem.quote_increment}</td>
                                                <td>{activeCoinItem.status}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table className={'striped centered'}>
                                        <thead>
                                            <tr>
                                                <th>Min. Market Funds</th>
                                                <th>Max Market Funds</th>
                                                <th>Post Only?</th>
                                                <th>Limit Only? </th>
                                                <th>Cancel Only?</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{activeCoinItem.min_market_funds}</td>
                                                <td>{activeCoinItem.max_market_funds}</td>
                                                <td>{(activeCoinItem.post_only) ? 'Yes' : 'No'}</td>
                                                <td>{(activeCoinItem.limit_only) ? 'Yes' : 'No'}</td>
                                                <td>{(activeCoinItem.cancel_only) ? 'Yes' : 'No'}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <span className="waves-effect waves-light btn" onClick={this.showModal}>Dismiss</span>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default HomepageComponent;
