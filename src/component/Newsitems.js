import React, { Component } from 'react'

export default class Newsitems extends Component {

    render() {
        let { title, author, url, readurl, publish, source } = this.props
        return (
            <>
                <div className="card" style={{ width: "18rem", marginBottom: '-40px' }}>
                    <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{ left: '90%', zindex: '1' }}>{source ? source : 'local'}</span>
                    <img src={url ? url : "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/d8d735444aedd82ace003a5e4f229f1a.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">{title}</p>
                        <p className="card-text"><span style={{ fontWeight: 'bold' }}>{author ? author : 'Unknown'}</span> Published on {new Date(publish).toGMTString()}</p>
                    </div>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', paddingBottom: '10px' }}>
                        <a href={readurl} target="about_blank" className="btn btn-info" >Read More</a>
                    </div>
                </div>
            </>
        )
    }
}
