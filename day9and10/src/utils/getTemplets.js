import View1 from "../components/view1"
import View2 from "../components/view2"
import View3 from "../components/view3"

export  const getTemplets = (key,item,view) => {
    switch (key) {
        case 1:
            return <View1 item={item} view={view}/>
        case 2:
            return <View2 item={item} view={view} />
        case 3:
            return <View3 item={item} view={view} />

        default:
            return <View1 item={item} view={view}/>
    }
}