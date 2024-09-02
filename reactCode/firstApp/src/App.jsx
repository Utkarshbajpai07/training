import Card from "./Card";

function App(){
  return(
    <> 
    <div className="grid grid-cols-4 gap-4">
    <Card heading="card 1" desc="This is card 1 desc" color="bg-slate-300"/>
    <Card heading="card 2" desc="This is card 2 desc"color="bg-red-300"/>
    <Card heading="card 3" desc="This is card 3 desc"color="bg-yellow-300"/>
    <Card heading="card 4" desc="This is card 4 desc"color="bg-green-300"/>
    <Card heading="card 5" desc="This is card 5 desc"color="bg-pink-300"/>
    <Card heading="card 6" desc="This is card 6 desc"color="bg-blue-300"/>
    </div>
    
    </>
  ) 
}

export default App;