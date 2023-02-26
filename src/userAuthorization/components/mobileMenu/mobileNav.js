
export const MobileMenu = () => {
    return (
        <div className='mobile_menu' onClick={mobileNavActive} >
            <span className='mobile_menu-bar'></span>
            <span className='mobile_menu-bar'></span>
            <span className='mobile_menu-bar'></span>
        </div>
    )
};

// mobile menu event handler
const mobileNavActive = () => {
    const mobileMenuBars = document.querySelectorAll('.mobile_menu-bar');
    const nav = document.querySelector('.nav');
    const navList = document.querySelector('.nav-list');

    mobileMenuBars.forEach( bar => {
        bar.classList.toggle('active');
        nav.classList.toggle('active');
        navList.classList.toggle('active');
    });
};