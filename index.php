<!Doctype HTML>
<html>
	<head>
		<title>floatdev</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
		<meta charset="utf-8">
        <link rel="icon" type="image" href="images/favicon.ico">
		<link rel="stylesheet" href="css/build/global.css">
		<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Lato:200,300,400' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Oswald:400,300, 700' rel='stylesheet' type='text/css'>
	</head>
	<body>
		<?php include_once 'svgs/build/svg-defs.svg'; ?>

		<!-- navigation and mobile menu -->
		<span id="mobile-clicker" class="mobile-clicker">
			<svg id="f" class="f"><use id="transform" xlink:href="#icon-f-transform"></use></svg>
		</span>
		<nav id="mobile-menu" class="mobile-menu">
			<ul>
				<li>
					<a href="#mission">mission
						<svg>
							<use xlink:href="#icon-mission-mobile"></use>
						</svg>
					</a>
				</li>
				<li>
					<a href="#process">process
						<svg>
							<use xlink:href="#icon-services-mobile"></use>
						</svg>
					</a>
				</li>
				<!-- <li><a href="#servicesIntro">servicesIntro</a></li> -->
				<li>
					<a href="#servicesBody">services
						<svg>
							<use xlink:href="#icon-process-mobile"></use>
						</svg>
					</a>
				</li>
				<li>
					<a href="#works">works
						<svg>
							<use xlink:href="#icon-works-mobile"></use>
						</svg>
					</a>
				</li>
				<li>
					<a href="#contact">contact
						<svg>
							<use xlink:href="#icon-contact-mobile"></use>
						</svg>
					</a>
				</li>
			</ul>
		</nav>

		<nav id ="dots" class="dots">
			<ul>
				<li><a href="#mission"><span id="mission-dot" class="mission-dot"></span></a></li>
				<li><a href="#process"><span id="process-dot" class="process-dot"></span></a></li>
				<li><a href="#servicesIntro"><span id="servicesIntro-dot" class="servicesIntro-dot"></span></a></li>
				<li><a href="#servicesBody"><span id="servicesBody-dot" class="servicesBody-dot"></span></a></li>
				<li><a href="#works"><span id="works-dot" class="works-dot"></span></a></li>
				<li><a href="#contact"><span id="contact-dot" class="contact-dot"></span></a></li>
			</ul>
		</nav>
		<!-- end navigation and mobile menu -->
		
		<!-- main -->
		<div id="logo" class="logo">
			<a href="#home">
				<svg>
					<use xlink:href="#icon-floatgradient"></use>
				</svg>
			</a>
		</div>

		<div id ="home">
			<div id="fixed" class="fixed-center-wrapper">
				<div class = "fixed-center-content">
					<svg class="logo1"><use xlink:href="#icon-floatlogo"></use></svg>
					<p>development</p>
				</div>
			</div>
		</div>
		<div id="mission" class="section parallax">
			<div class="center-content">
				<h1>Our Mission</h1>
				<p>We offer a comprehensive approach to web design aimed at extending your brand into the digital space. Through our process of understanding, we craft solutions that forward your goals as a business, and make your website work for you. We believe that a website should reflect your company's image while also helping to streamline your relationship with customers.</p>
			</div>
		</div>
		<div id="process" class="section">
			<div class="center-content">
				<div class="container">
					<h1>Our Creative Process</h1>
					<p>Our process assures you get more than a website. You get a branded solution informed by caring research, thoughtful interactions and graphics.</p>
				</div>
				<div class="container">
					<div class="responsive">
						<div class="half">
							<svg>
								<use xlink:href="#icon-identify"></use>
							</svg>
							<h2>Identify Challenges</h2>
							<p>We explore your strengths and weaknesses to discover innovative solutions for your needs.</p>
						</div>
						<div class="half">
							<svg>
								<use xlink:href="#icon-design"></use>
							</svg>
							<h2>Design Solutions</h2>
							<p>The best solutions are custom, that’s why we design every project with careful consideration for the details, big and small.</p>
						</div>
					</div>
					<div class="responsive">
						<div class="half">
							<svg>
								<use xlink:href="#icon-development"></use>
							</svg>
							<h2>Technical Development</h2>
							<p>Experts in a wide range of technical solutions. We apply the best technologies for the task at hand.</p>
						</div>
						<div class="half">
							<svg>
								<use xlink:href="#icon-support"></use>
							</svg>
							<h2>Ongoing Support</h2>
							<p>We can teach you how to manage your website and provide other administrative or tactical support as needed.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="servicesIntro" class="section parallax">
			<div class="center-content">
				<div class="part1">
					<h1>Services Tailored To Your Needs</h1>
					<p>A website is the sum of its parts, and success depends on a fragile combination of content, design and technical knowledge. This is why we offer a full range of professional services attending to everything from branding to content creation.</p>
				</div>
			</div>
		</div>
		<div id="servicesBody" class="section servicesBody">
			<div class="container">
				<h1>Creative Services</h1>
				<p>Finding the right balance of features and content to speak to your customers is a delicate process. That’s why we offer a comprehensive set of creatives services to get you there.</p>
			</div>
			<div class="container">
				<div class="responsive">
					<div class="half">
						<svg>
							<use xlink:href="#icon-graphics"></use>
						</svg>
						<div class="servicesText">
							<h2>Graphics</h2>
							<p>Think of logos, icons, and images as power-tools that help show off your business. Whether you're starting from scratch or need a refresh, we can help.</p>
						</div>
					</div>
					<div class="half">
						<svg>
							<use xlink:href="#icon-customlayout"></use>
						</svg>
						<div class="servicesText">
							<h2>Custom Layout</h2>
							<p>No straight-out-of-the-box templates here! Our experience designers work hard to create a layout that makes sense for your content.</p>
						</div>
					</div>
				</div>
				<div class="responsive">
					<div class="half">
						<svg>
							<use xlink:href="#icon-photography"></use>
						</svg>
						<div class="servicesText">
							<h2>Photography</h2>
							<p>Your customers want to see your best work, so we provide immersive photography, shot with the web in mind.</p>
						</div>
					</div>
					<div class="half">
						<svg>
							<use xlink:href="#icon-copywriting"></use>
						</svg>
						<div class="servicesText">
							<h2>Copywriting</h2>
							<p>Getting the right message across is easier said than done. Our copywriting service works with you to find the right language and tone for your brand.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="container">
				<h1>Technical Services</h1>
				<p>Building a website that will last and run well for all of your users is no easy task. Our engeneers use the lastest technology to ensure a fast smooth experience for your users.</p>
			</div>
			<div class="container">
				<div class="responsive">
					<div class="half">
						<svg>
							<use xlink:href="#icon-customcms"></use>
						</svg>
						<div class="servicesText">
							<h2>Custom CMS</h2>
							<p>Need to change the details of your site on demand? We work with mainstream content management frameworks offering an easy way to edit your site from anywhere.</p>
						</div>
					</div>
					<div class="half">
						<svg>
							<use xlink:href="#icon-analytics"></use>
						</svg>
						<div class="servicesText">
						<h2>Analytics</h2>
							<p>A beautiful website isn't much use if you can’t tell who’s looking at it. We offer a wide range on analytics tools so that you can keep track of customer response.</p>
						</div>
					</div>
				</div>

				<div class="responsive last">
					<div class="half">
						<svg>
							<use xlink:href="#icon-responsive"></use>
						</svg>
						<div class="servicesText">
							<h2>Responsive Design</h2>
							<p>Our sites are designed to be optimal on all browsers, and flexible on screen sizes from desktop to smartphone.</p>
						</div>
					</div>
					<div class="half">
						<svg>
							<use xlink:href="#icon-performanceAlt"></use>
						</svg>
						<div class="servicesText">
							<h2>Optimized Performance</h2>
							<p>Unlike off the shelf solutions, we create streamlined websites optimized for speed, even on the slowest connections.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div id="works" class="section">
			<div class="container">
				<h1>Our Work</h1>
				<div class="responsive">
					<div id="images-wrap" class="images-wrap">
						<svg id="icon-phone" class="icon-phone">
							<use xlink:href="#icon-iphone"></use>
						</svg>
						<svg id="icon-desktop" class="icon-desktop">
							<use xlink:href="#icon-macbook"></use>
						</svg>
						<svg id="icon-tablet" class="icon-tablet">
							<use xlink:href="#icon-ipad"></use>
						</svg>
					</div>
                </div>
                <div class="works-dots">
                    <span id="arrow-left" class="arrow-wrap left">
						<svg class="icon-arrow left">
							<use xlink:href="#icon-arrow"></use>
			    		</svg>					
					</span>
                    <span id="forge-dot" class="active dot"></span>
                    <span id="creek-dot" class="dot"></span>
                    <span id="arrow-right" class="arrow-wrap right">
						<svg class="icon-arrow right">
							<use xlink:href="#icon-arrow"></use>
						</svg>
					</span>
                </div>
                <div class="description">
                   	<h2 id="site-name" class="forge-color"></h2>
                    <p id="site-desc" class="forge-content"></p>
         		</div>
			</div>
		</div>

		<div id="contact" class="section">
			<div class = "center-content">
				<h1>Contact Us</h1>
				<p>Let us know about your project and we will get in touch with you about possible design solutions.</p>
				<div id="form-messages"></div>
				<form name="emailme" id='ajax-contact' method="post" action="email.php">
					<div class = "formline">
						<input type="text" class='formtext' id ='clientname' name="clientname" placeholder="Name" required>
					</div>
					<div class = "formline">
						 <input type="email" class='formtext' id ='email' name="email" placeholder="Email" required>
					</div>
					<div class = "formline">
						<input type="text" class='formtext' id ='companyname' name="companyname" placeholder="Company">
					</div>
					<textarea class="description" id ='description' name="description" placeholder="Project Description" required></textarea>
					<div class="formline">
						<button type="submit" id="serialize">Send</button>
					</div>

				</form>
				<h3>team@floatdev.com</h3>
				<p class="number">(650) 731-2593</p>
			</div>
		</div>
	<!-- end main -->

		<!-- Scripts -->  
		<script type="text/javascript" src="js/build/global.min.js"></script>
		<!-- end Scripts -->
	</body>
</html>