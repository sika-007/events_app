import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import sika from "@/public/images/sika.png"

const Header = () => {
	return (
		<header className='header'>
			<div>
				<div className='top-nav'>
					<Image src={sika} width={50} height={50} alt="logo" />
					<nav>
						<ul>
							<li>
								<Link href='/'>Home</Link>
							</li>
							<li>
								<Link href='/events'>Events</Link>
							</li>
							<li>
								<Link href='/about-us'>About Us</Link>
							</li>
						</ul>
					</nav>
				</div>
				<h1 className='header-title'>Lorem ipsum dolor sit amet consectetur adipisicing</h1>
			</div>
		</header>
	)
}

export default Header
