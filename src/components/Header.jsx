const Header = () =>{
    return (
        <div className="absolute w-full bg-linear-to-b from-black flex justify-between">
            <div className="w-52 z-10 my-2 mx-16"><img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
            />
            </div>
            <div className="flex h-12 m-6 w-32 justify-between">
                <img className="z-10 w-10 h-10 rounded-md" src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"/>
                <button className="text-white cursor-pointer pb-3" >Sign Out</button>
            </div>
            
        </div>
    )
}

export default Header