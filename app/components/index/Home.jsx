import React from 'react'
import Slider from '../lib/Slider.jsx'
import NavLink from '../lib/NavLink.jsx'

export default React.createClass({
  render() {
    return (
        <div>
            <div className="banner">
                <div className="swiper-container">
                    <Slider />
                </div>
                <div className="top-nav clearfix">
                    <div>
                        <a href="javascript:void(0);">
                            <i className="icon iconfont">&#xe600;</i>
                            带薪如厕
                        </a>
                    </div>
                    <div>
                        <a href="javascript:void(0);">
                            <i className="icon iconfont">&#xe607;</i>
                            G20不放假
                        </a>
                    </div>
                    <div>
                        <a href="javascript:void(0);">
                            <i className="icon iconfont">&#xe60e;</i>
                            公交上班
                        </a>
                    </div>
                </div>
            </div>
            <div className="menu clearfix">
                <div className="col3">
                    <NavLink to="/edu">
                        <img src={require('../../img/menu_edu.png')}/>
                        一年级画画
                    </NavLink>
                </div>
                <div className="col3">
                    <a href="javascript:void(0);">
                        <img src={require('../../img/menu_safaguard.png')}/>
                        二年级跳舞
                    </a>
                </div>
                <div className="col3">
                    <a href="javascript:void(0);">
                        <img src={require('../../img/menu_policy.png')}/>
                        三年级乒乓
                    </a>
                </div>
                <div className="col3">
                    <a href="javascript:void(0);">
                        <img src={require('../../img/menu_server.png')}/>
                        四年级篮球
                    </a>
                </div>
                <div className="col3">
                    <a href="javascript:void(0);">
                        <img src={require('../../img/menu_train.png')}/>
                        五年级国画
                    </a>
                </div>
                <div className="col3">
                    <a href="javascript:void(0);">
                        <img src={require('../../img/menu_labour.png')}/>
                        六年级毕业
                    </a>
                </div>
                <div className="col3">
                    <a href="javascript:void(0);">
                        <img src={require('../../img/menu_train.png')}/>
                        初中打架
                    </a>
                </div>
                <div className="col3">
                    <a href="javascript:void(0);">
                        <img src={require('../../img/menu_suggestion.png')}/>
                        高中游戏
                    </a>
                </div>
                <div className="col3">
                    <a href="javascript:void(0);">
                        <img src={require('../../img/menu_more.png')}/>
                        大学干啥
                    </a>
                </div>
            </div>
        </div>
    )
  }
})
