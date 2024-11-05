
import './App.css'
import BasicDayPicker from './components/Basic'
import CustomStyledDayPicker from './components/CustomStyles'
import MultipleDaysSelection from './components/MultipleDaysSelection'
import RangeSelection from './components/Range'

function App() {
const customStyle={
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxHeight: '100%',
  backgroundColor: '#f1f1f1',
  flexDirection: 'column',
  gap:'30px'
 
}

  return (
   <div style={customStyle}>
   <BasicDayPicker/>
   <CustomStyledDayPicker/>
   <RangeSelection/>
   <MultipleDaysSelection/>
   </div>
  )
}

export default App
