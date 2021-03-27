import React from 'react'
import Main from '../components/Main'
import Cards from '../components/Cards'
import useInitialState from '../hooks/useInitialState'
import '../assets/styles/global.scss'


const App = () => {
  const  info  = useInitialState()
  console.log(info)

  return (
    <div className="App">
      <Main>
      {info.loading && <p className='state'>Loading...</p>}
      {info.error && <p className='state state--error'>{info.error}</p>}
      {!info.loading && !info.error && <Cards data={info.data} />}
      </Main>
    </div>
  ) 
}

export default App