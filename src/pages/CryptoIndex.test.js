import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CryptoIndex from './CryptoIndex'
Enzyme.configure({ adapter: new Adapter() })



describe("When CryptoIndex renders", () => {
    let cryptos = {
        id: 1,
        name: "Bitcoin",
        age: 13,
        creator: "Satoshi Nakamoto",
        image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }
    it("displays a form", () => {
        const cyptoIndex = shallow(<CryptoIndex crypto={cryptos} />)
        const card = cyptoIndex.find("CardBody")
        expect(card.length).toEqual(0)
    })
})
