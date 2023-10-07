import React, { Component } from 'react'
import Newsitems from './Newsitems'
import './compo.css'

export default class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsapis: [],
            page: 1,
            loading: false,
            totalResult: 0
        }
        document.title = this.props.category
    }
    updatenews = async () => {
        this.setState({ loading: true })
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=11adc4b3706a4732b45168947d2d79c0&page=${this.state.page}`)
        let data1 = await data.json()
        this.setState({ newsapis: data1.articles, totalResult: data1.totalResults, loading: false })
        console.log(data1, this.state.totalResult)

    }
    presong = () => {
        this.setState({ page: this.state.page - 1, })
        this.updatenews()
    }
    nextsong = () => {
        this.setState({ page: this.state.page + 1 })
        this.updatenews()
    }
    async componentDidMount() {
        this.updatenews()
    }
    categoryname() {
        let name = this.props.category
        let newname = name.slice(0, 1).toUpperCase() + name.slice(1)
        return newname
    }
    render() {
        return (
            <>
                <h3 className='container' style={{ textAlign: 'center', marginTop: '10px' }}>{this.categoryname()} News from <span style={{ color: 'brown' }}> NewOne</span> </h3>
                <div className='d-flex justify-content-around my-3 mb-5'  >
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.presong}>Preview</button>
                    <button disabled={this.state.totalResult / (this.state.page * 20) < 0.87 ? 'disabled' : ''} type="button" className="btn btn-primary" onClick={this.nextsong}>Next</button>
                </div>
                {this.state.loading && <div className="spinner position-absolute top-50 start-50"></div>}
                <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', gap: '120px', alignContent: 'center', justifyContent: 'center' }}>
                    {!this.state.loading && this.state.newsapis.map((el) => {
                        return <div key={el.url} >
                            <Newsitems title={el.title} author={el.author} url={el.urlToImage} readurl={el.url} publish={el.publishedAt} source={el.source.name} />
                        </div>
                    })
                    }
                </div>
            </>
        )
    }
}
