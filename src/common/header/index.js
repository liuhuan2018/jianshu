import React ,{Component} from 'react';
import { connect } from 'react-redux';
import './header.scss';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchValue:'',
            hotList:['亳州','十大'],
            hotShow:false
        }
        this.changeHotStatus = this.changeHotStatus.bind(this);
        this.leaveHot = this.leaveHot.bind(this);
    }

    render(){
        return(
            <div className='headbox'>
                <div className='topbox'>
                    <a href='/' className='logo'></a>
                    <div className='nav'>
                        <div className='fl g_style active'>首页</div>
                        <div className='fl g_style'>下载App</div>
                        <div className={this.props.focusd ? 'focusdbox input_box' :'input_box'}>
                            <input 
                                placeholder='搜索' 
                                className={this.props.focusd ? 'top_input focusd' : 'top_input'} 
                                onFocus={this.props.focusInput}
                                onBlur={this.props.blurInput}
                                value={this.state.searchValue}
                            ></input>
                            {
                                (this.props.focusd || this.state.hotShow)
                                && <div className='hotSearch'
                                        onMouseEnter={this.changeHotStatus}
                                        onMouseLeave={this.leaveHot}
                                >
                                    {
                                        this.state.hotList.map((item) => {
                                            return <span key={item} onClick={this.hotValue.bind(this,item)}>{item}</span>
                                        })
                                    }
                                </div>
                            }

                            <i className={this.props.focusd ? 'focus_sousuo sousuo' :'sousuo'}></i>
                        </div>
                        <div className='fr g_style'>Aa</div>
                        <div className='fr g_style'>登录</div>
                    </div>
                    <div className='top_right'>
                        <div className='register'>注册</div>
                        <div className='write_wz'>写文章</div>
                    </div>
                </div>
            </div>
        )

    }
    changeHotStatus(){
        this.setState({
            hotShow:true
        })
    }

    leaveHot(){
        this.setState({
            hotShow:false
        })
    }

    hotValue(item){
        this.setState({
            searchValue:item,
            hotShow:false
        })
    }

}

const mapStateToProps = (state) => {
    return{
        focusd : state.focusd,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        focusInput(){
            const action = {
                type:'search_focusd'
            }
            dispatch(action)
        },

        blurInput(){
            const action ={
                type:'search_blur'
            }
            dispatch(action)
        }
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Header);