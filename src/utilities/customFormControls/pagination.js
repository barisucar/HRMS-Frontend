import React, { Component } from 'react'

export default class pagination extends Component {

    constructor(props){
        super(props);
        this.state = {
          activePage: 15
        };
      }
    
      handlePageChange(pageNumber){
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
      }

}
