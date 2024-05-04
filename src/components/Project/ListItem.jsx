import Item from "./Item"
import Api from '../..'

const ListItem = () => {
  const datas = Api()
  return (
    <div id="project" className="mx-auto my-20 flex items-center justify-center flex-col p-16">
      <h1 className="text-2xl my-16 font-medium">Let's explore a few of my projects</h1>

    <div className="grid grid-cols-3 sm:grid-cols-2 gap-4">
      {datas.map((data, index) => (
        <Item data={data} key={index} index={index}/>
      ))}
    </div>
    </div>
  )
}

export default ListItem