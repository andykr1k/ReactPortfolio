import logo from '../assets/rbanimoji.png'
const Header = () => {

  return (
    <div className='flex text-white bg-slate-800'>
        <img src={logo} alt="Logo" />
        <div className='flex'>
            <a className='m-auto mr-5 hover:underline'>Home</a>
            <a className='m-auto mr-5'>About Me</a>
            <a className='m-auto mr-5'>Projects</a>
            <a className='m-auto mr-5'>Contact</a>
        </div>
    </div>
  )
}

export default Header;
