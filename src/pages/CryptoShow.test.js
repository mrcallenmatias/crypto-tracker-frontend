import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CryptoShow from './CryptoShow'
import mockCryptos from '../mockCryptos'
Enzyme.configure({ adapter: new Adapter() })



describe("When CryptoShow renders", () => {
    let cryptoShow
    beforeEach(() => {
        cryptoShow = shallow(<CryptoShow crypto={mockCryptos[0]}/>)
    })
    it("displays a header", () => {
        const text = cryptoShow.find("h1").text()
        expect(text).toEqual("s")
    })
    it("displays a card", () => {
        const card = cryptoShow.find("Card")
        expect(card.length).toEqual(1)
        const cardTitle = cryptoShow.find("CardTitle")
        expect(cardTitle.length).toEqual(1)
        const cardText = cryptoShow.find("CardText")
        expect(cardText.length).toEqual(1)
        const cardBody = cryptoShow.find("CardBody")
        expect(cardBody.length).toEqual(3)
        const showImage = cryptoShow.find("img")
        expect(showImage.length).toEqual(1)
    })
})
