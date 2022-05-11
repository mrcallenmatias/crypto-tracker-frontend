import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CryptoNew from './CryptoNew'
Enzyme.configure({ adapter: new Adapter() })



describe("When CryptoNew renders", () => {
    let cryptoNew
    beforeEach(() => {
        cryptoNew = shallow(<CryptoNew />)
    })
    it("displays a form", () => {
        const newForm = cryptoNew.find("Form")
        expect(newForm.length).toEqual(1)
    })
    it("displays a crypto name input", () => {
        const catNewNameInput = cryptoNew.find("[name='name']")
        expect(catNewNameInput.length).toEqual(1)
    })
    it("displays a crypto age input", () => {
        const catNewAgeInput = cryptoNew.find("[name='age']")
        expect(catNewAgeInput.length).toEqual(1)
    })
    it("displays a crypto creator input", () => {
        const catNewEnjoysInput = cryptoNew.find("[name='creator']")
        expect(catNewEnjoysInput.length).toEqual(1)
    })
    it("displays a crypto image input", () => {
        const catNewImageInput = cryptoNew.find("[name='image']")
        expect(catNewImageInput.length).toEqual(1)
    })
})
