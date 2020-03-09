import PropTypes from 'prop-types'
import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Search, Label } from 'semantic-ui-react'
import API from '../api/api'
import {Link} from 'react-router-dom'

const source = _.times(5, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, '$'),
}))

const resultRenderer = ({ name }) => <Label content={name} />

resultRenderer.propTypes = {
  name: PropTypes.string,
}
const start = { isLoading: false, results: [], value: '' }

export default class SearchExampleStandard extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading: false, 
            results: [], 
            value: '' ,
            Hotel : []
        }
    }
    componentDidMount(){
        API.get('/management/getHotel')
        .then(res =>{
            if(res.data){
                this.setState({
                    Hotel : this.state.Hotel.concat(res.data)
                })
            }
        })
    }
  handleResultSelect = (e, { result }) => this.setState({ value: result.name })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(start)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.name)

      this.setState({
        isLoading: false,
        results: _.filter(this.state.Hotel, isMatch),
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
          <div className="container">
              <div className="search">
                <p>Search hotel by name</p>
                <Search
                    loading={isLoading}
                    onResultSelect={this.handleResultSelect}
                    onSearchChange={_.debounce(this.handleSearchChange, 500, {
                    leading: true,
                    })}
                    results={results}
                    value={value}
                    size="big"
                    resultRenderer={resultRenderer}
                    {...this.props}
                    />
                    <br></br>
                    <button className="btn btn-primary">Serach</button>
              </div>
          </div>
    )
  }
}
