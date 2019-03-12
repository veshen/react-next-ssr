import Link from 'next/link'
import { connect } from 'react-redux'
import Counter from './counter'
import Clock from './clock'

function Page ({
  error,
  lastUpdate,
  light,
  linkTo,
  NavigateTo,
  placeholderData,
  title
}) {
  return (
    <div>
      <h1>{title}</h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
      <ul>
          {placeholderData && (
              placeholderData.map((item,index)=>{
                  return(
                      <li key={item.id}>
                          <h3>{item.title}</h3>
                          <div>
                              <div className="left-box">
                                  <img src={item.dataMap.userHeadPortrait}/>
                                  <span>{item.dataMap.nickName}</span>
                                  <span>{item.updateTime}</span>
                              </div>
                              <div className="right-box">
                                <span>{item.pageviewInt}</span>
                                <span>{item.likenumInt}</span>
                              </div>
                          </div>
                      </li>
                  )
              })
          )}
      </ul>
      <style jsx>{`
        li{
            list-style-type : none;
            width : 600px;
            border-bottom: .026667rem solid #ddd;
            padding : 15px 10px;
        }
        li>div{
            display:flex;
            justify-content : space-between;
        }
        .left-box{
            display:flex;
            justify-content : start;
            align-items : center;
        }
        .left-box img{
            width:50px;
            height:50px;
            border-radius : 50%;
        }
        .left-box span{
            margin-left: 20px;
        }
        .right-box{
            display:flex;
            justify-content : end;
            align-items : center;
        }
        .right-box span{
            margin-left: 20px;
        }
      `}</style>
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </div>
  )
}

export default connect(state => state)(Page)
