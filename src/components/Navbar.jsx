const Navbar = () => {
  return (<>
    <div className="logo_section p-5 flex justify-between lg:justify-around items-center">

      {/* App Name */}
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-white font-bold">MemeZilla</h1>
        <p className="text-xl text-white">by Yashwanth M</p>
      </div>

      {/* GitHub Repository Link */}
      <a href="https://github.com/yash-2008-yash/memezilla" target="_blank">
        <img src="/github.png" alt="" />
      </a>

    </div>
  </>)
}

export default Navbar
