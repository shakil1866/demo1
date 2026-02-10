# Support Page Redesign Plan - The Girls' School

## Overview
Redesign the Support.html section below the navbar with a premium, modern, and content-rich presentation. Preserve the purpose of support and giving information while expanding content and storytelling.

## Design Philosophy
- **Warm & Inspiring**: Use warm accent colors and emotional storytelling
- **Performance-Friendly**: Efficient CSS animations using transform/opacity only
- **Calm & Elegant**: Subtle, smooth animations that enhance readability
- **Content-Rich**: Expanded narratives with clear impact communication

---

## Page Structure

### 1. Animated Intro Section (Below Navbar)
**Purpose**: Immediate emotional connection with a strong headline

```html
<section class="support-intro">
    <div class="intro-background">
        <div class="floating-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
        </div>
    </div>
    <div class="container">
        <div class="intro-content">
            <span class="intro-tag" data-animate="fade-up" data-delay="100">Together We Rise</span>
            <h1 class="intro-headline" data-animate="fade-up" data-delay="200">
                Empowering Tomorrow's Leaders Through<br>
                <span class="gradient-text">Generous Hearts</span>
            </h1>
            <p class="intro-subtitle" data-animate="fade-up" data-delay="400">
                Every contribution transforms a girl's potential into powerful achievement.
                Join our community of supporters who believe in the extraordinary
                capacity of young women to change the world.
            </p>
            <div class="intro-actions" data-animate="fade-up" data-delay="600">
                <a href="#donate" class="btn btn-primary btn-large">Make a Gift</a>
                <a href="#impact" class="btn btn-outline btn-large">See Our Impact</a>
            </div>
        </div>
        <div class="intro-scroll-indicator" data-animate="fade-in" data-delay="1000">
            <span class="scroll-text">Discover More</span>
            <div class="scroll-arrow">
                <svg viewBox="0 0 24 24" width="24" height="24">
                    <path d="M7 10l5 5 5-5z" fill="currentColor"/>
                </svg>
            </div>
        </div>
    </div>
</section>
```

**Animations**:
- Floating shapes: gentle floating animation (3s loop)
- Headline: fade-up with 200ms stagger
- Scroll indicator: gentle bounce animation

---

### 2. Why Support The Girls' School Section
**Purpose**: Expanded narrative explaining importance of community support

```html
<section class="why-support" id="why-support">
    <div class="container">
        <div class="section-header" data-animate="fade-up">
            <span class="section-tag">Why Your Support Matters</span>
            <h2 class="section-title">Investing in Girls, Investing in Future</h2>
            <p class="section-subtitle">
                For over two decades, The Girls' School has been dedicated to nurturing
                confident, compassionate leaders. Your support amplifies our mission.
            </p>
        </div>

        <div class="support-narrative">
            <div class="narrative-content" data-animate="fade-right">
                <h3>The Power of All-Girls Education</h3>
                <p>
                    Research consistently shows that girls in single-gender environments
                    develop stronger confidence, take more academic risks, and excel in
                    STEM fields. At The Girls' School, we witness this transformation
                    every day.
                </p>
                <p>
                    Our graduates emerge as fearless leaders, ready to challenge conventions
                    and shape industries. But this transformative education isn't possible
                    without generous supporters like you.
                </p>
            </div>
            <div class="narrative-visual" data-animate="fade-left">
                <div class="narrative-image-wrapper">
                    <div class="narrative-image">
                        <svg viewBox="0 0 400 300" width="400" height="300">
                            <rect fill="var(--primary-dark)" opacity="0.1" width="400" height="300"/>
                            <circle cx="200" cy="150" r="80" fill="var(--primary)" opacity="0.2"/>
                            <circle cx="200" cy="150" r="50" fill="var(--primary-light)" opacity="0.3"/>
                            <text x="200" y="155" text-anchor="middle" fill="white" font-size="24">
                                Excellence
                            </text>
                        </svg>
                    </div>
                    <div class="image-accent"></div>
                </div>
            </div>
        </div>

        <div class="values-grid" data-animate="fade-up" data-stagger="150">
            <div class="value-card">
                <div class="value-icon">
                    <svg viewBox="0 0 48 48" width="40" height="40">
                        <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" stroke-width="2"/>
                        <path d="M24 14v10l7 7" fill="none" stroke="currentColor" stroke-width="2"/>
                    </svg>
                </div>
                <h4>Accessibility</h4>
                <p>Financial aid ensures every qualified girl can access our transformative education regardless of means.</p>
            </div>
            <div class="value-card">
                <div class="value-icon">
                    <svg viewBox="0 0 48 48" width="40" height="40">
                        <path d="M24 4l5 10 11 2-8 8 2 11-10-5-10 5 2-11-8-8 11-2z" fill="currentColor"/>
                    </svg>
                </div>
                <h4>Excellence</h4>
                <p>Your gifts fund exceptional faculty, innovative programs, and state-of-the-art resources.</p>
            </div>
            <div class="value-card">
                <div class="value-icon">
                    <svg viewBox="0 0 48 48" width="40" height="40">
                        <circle cx="24" cy="16" r="8" fill="none" stroke="currentColor" stroke-width="2"/>
                        <path d="M10 44c0-8 6-14 14-14s14 6 14 14" fill="none" stroke="currentColor" stroke-width="2"/>
                    </svg>
                </div>
                <h4>Community</h4>
                <p>Supporters become part of a vibrant network dedicated to lifting up the next generation.</p>
            </div>
        </div>
    </div>
</section>
```

**Animations**:
- Staggered entrance for value cards
- Floating accent on narrative image

---

### 3. Impact of Giving Section
**Purpose**: Rich storytelling showing how contributions enhance programs

```html
<section class="impact-giving" id="impact">
    <div class="container">
        <div class="section-header" data-animate="fade-up">
            <span class="section-tag">Your Impact</span>
            <h2 class="section-title">Stories of Transformation</h2>
            <p class="section-subtitle">
                Behind every statistic is a real girl whose life has been changed
                by generous supporters like you.
            </p>
        </div>

        <div class="impact-cards" data-animate="fade-up" data-stagger="200">
            <div class="impact-card">
                <div class="card-visual">
                    <svg viewBox="0 0 300 200" width="300" height="200">
                        <rect fill="var(--primary-dark)" opacity="0.15" width="300" height="200"/>
                        <rect x="20" y="20" width="260" height="160" rx="8" fill="none" stroke="var(--primary)" stroke-width="1" opacity="0.3"/>
                        <circle cx="150" cy="80" r="30" fill="var(--primary-light)" opacity="0.4"/>
                        <rect x="80" y="130" width="140" height="8" rx="4" fill="var(--primary)" opacity="0.3"/>
                        <rect x="100" y="150" width="100" height="6" rx="3" fill="var(--gray-400)"/>
                    </svg>
                </div>
                <div class="card-content">
                    <span class="card-category">Financial Aid</span>
                    <h3>$2.1M in Annual Scholarships</h3>
                    <p>
                        Last year, we distributed over $2.1 million in financial aid,
                        ensuring that 100% of eligible students received support.
                        This means talented girls from diverse economic backgrounds
                        can thrive at our school.
                    </p>
                    <div class="card-stat">
                        <span class="stat-number" data-count="100">0</span>
                        <span class="stat-suffix">%</span>
                        <span class="stat-label">of eligible students aided</span>
                    </div>
                </div>
            </div>

            <div class="impact-card impact-card-reverse">
                <div class="card-visual">
                    <svg viewBox="0 0 300 200" width="300" height="200">
                        <rect fill="var(--accent)" opacity="0.1" width="300" height="200"/>
                        <rect x="20" y="20" width="260" height="160" rx="8" fill="none" stroke="var(--accent)" stroke-width="1" opacity="0.3"/>
                        <circle cx="100" cy="80" r="25" fill="var(--accent-light)" opacity="0.5"/>
                        <circle cx="200" cy="80" r="25" fill="var(--primary-light)" opacity="0.4"/>
                        <circle cx="150" cy="130" r="20" fill="var(--primary)" opacity="0.3"/>
                        <path d="M100 55 Q150 40 200 55" fill="none" stroke="var(--primary)" stroke-width="2" opacity="0.5"/>
                    </svg>
                </div>
                <div class="card-content">
                    <span class="card-category">Faculty Excellence</span>
                    <h3>Investing in Educators</h3>
                    <p>
                        Your contributions fund ongoing professional development,
                        competitive compensation, and innovative teaching resources.
                        Our faculty stays at the forefront of girls' education research,
                        bringing cutting-edge methods to our classrooms.
                    </p>
                    <div class="card-stat">
                        <span class="stat-number" data-count="45">0</span>
                        <span class="stat-suffix">+</span>
                        <span class="stat-label">faculty development hours annually</span>
                    </div>
                </div>
            </div>

            <div class="impact-card">
                <div class="card-visual">
                    <svg viewBox="0 0 300 200" width="300" height="200">
                        <rect fill="var(--primary-lighter)" opacity="0.15" width="300" height="200"/>
                        <rect x="20" y="20" width="260" height="160" rx="8" fill="none" stroke="var(--primary-lighter)" stroke-width="1" opacity="0.4"/>
                        <circle cx="150" cy="100" r="50" fill="var(--primary)" opacity="0.2"/>
                        <path d="M150 60 L170 90 L200 90 L175 110 L185 140 L150 120 L115 140 L125 110 L100 90 L130 90z" fill="var(--primary-lighter)" opacity="0.6"/>
                    </svg>
                </div>
                <div class="card-content">
                    <span class="card-category">STEM Programs</span>
                    <h3>Building Future Innovators</h3>
                    <p>
                        From robotics clubs to advanced coding workshops, your
                        support enables us to provide hands-on STEM experiences
                        that inspire the next generation of female scientists,
                        engineers, and technology leaders.
                    </p>
                    <div class="card-stat">
                        <span class="stat-number" data-count="12">0</span>
                        <span class="stat-suffix"></span>
                        <span class="stat-label">STEM clubs and programs</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

**Animations**:
- Card hover: gentle lift with shadow enhancement
- Staggered reveal on scroll
- Stat counters animate when visible

---

### 4. Ways to Give Section
**Purpose**: Detailed sections for annual funds, special programs, events, volunteer

```html
<section class="ways-to-give" id="options">
    <div class="container">
        <div class="section-header" data-animate="fade-up">
            <span class="section-tag">Make Your Impact</span>
            <h2 class="section-title">Ways to Give</h2>
            <p class="section-subtitle">
                Whether you give once or commit to ongoing support, every contribution
                matters. Find the giving option that resonates with you.
            </p>
        </div>

        <div class="giving-tabs">
            <button class="tab-btn active" data-tab="annual">Annual Fund</button>
            <button class="tab-btn" data-tab="special">Special Programs</button>
            <button class="tab-btn" data-tab="events">Events</button>
            <button class="tab-btn" data-tab="planned">Planned Giving</button>
        </div>

        <div class="giving-content">
            <div class="giving-panel active" id="annual-panel">
                <div class="panel-content" data-animate="fade-right">
                    <div class="panel-icon">
                        <svg viewBox="0 0 64 64" width="64" height="64">
                            <rect x="8" y="20" width="48" height="32" rx="4" fill="none" stroke="currentColor" stroke-width="2"/>
                            <circle cx="32" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/>
                            <path d="M20 50l8 8 16-16" fill="none" stroke="currentColor" stroke-width="2"/>
                        </svg>
                    </div>
                    <h3>Annual Fund</h3>
                    <p>
                        The Annual Fund is the heartbeat of our school, providing immediate
                        resources for daily operations and emerging needs. Your gift directly
                        supports:
                    </p>
                    <ul class="giving-list">
                        <li>Financial aid and scholarships</li>
                        <li>Faculty salaries and development</li>
                        <li>Academic programs and curriculum enhancement</li>
                        <li>Student activities and enrichment</li>
                        <li>Campus maintenance and improvements</li>
                    </ul>
                    <a href="#" class="btn btn-primary">Give to Annual Fund</a>
                </div>
                <div class="panel-visual" data-animate="fade-left">
                    <div class="visual-box">
                        <div class="progress-circle">
                            <svg viewBox="0 0 120 120" width="120" height="120">
                                <circle cx="60" cy="60" r="54" fill="none" stroke="var(--gray-200)" stroke-width="8"/>
                                <circle cx="60" cy="60" r="54" fill="none" stroke="var(--primary)" stroke-width="8"
                                    stroke-dasharray="340" stroke-dashoffset="68" stroke-linecap="round"
                                    class="progress-ring"/>
                            </svg>
                            <div class="progress-text">
                                <span class="progress-value">80%</span>
                                <span class="progress-label">of goal reached</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="giving-panel" id="special-panel">
                <div class="panel-content">
                    <div class="panel-icon">
                        <svg viewBox="0 0 64 64" width="64" height="64">
                            <polygon points="32,8 40,28 62,28 44,42 52,62 32,50 12,62 20,42 2,28 24,28" fill="currentColor"/>
                        </svg>
                    </div>
                    <h3>Special Programs</h3>
                    <p>
                        Support specific initiatives that align with your passions,
                        from arts and athletics to technology and environmental stewardship.
                    </p>
                    <ul class="giving-list">
                        <li>STEM Laboratory Enhancement</li>
                        <li>Arts and Music Programs</li>
                        <li>Athletic Facilities and Equipment</li>
                        <li>Environmental Education Initiatives</li>
                        <li>International Exchange Programs</li>
                    </ul>
                    <a href="#" class="btn btn-primary">Explore Programs</a>
                </div>
                <div class="panel-visual">
                    <div class="program-cards">
                        <div class="program-card">
                            <h4>STEM Lab</h4>
                            <p>State-of-the-art equipment for hands-on learning</p>
                        </div>
                        <div class="program-card">
                            <h4>Arts Wing</h4>
                            <p>Spaces for creativity and expression</p>
                        </div>
                        <div class="program-card">
                            <h4>Athletics</h4>
                            <p>Facilities for healthy competition</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="giving-panel" id="events-panel">
                <div class="panel-content">
                    <div class="panel-icon">
                        <svg viewBox="0 0 64 64" width="64" height="64">
                            <rect x="8" y="10" width="48" height="48" rx="4" fill="none" stroke="currentColor" stroke-width="2"/>
                            <line x1="8" y1="22" x2="56" y2="22" stroke="currentColor" stroke-width="2"/>
                            <line x1="22" y1="10" x2="22" y2="58" stroke="currentColor" stroke-width="2"/>
                            <circle cx="44" cy="42" r="6" fill="var(--accent)" opacity="0.5"/>
                        </svg>
                    </div>
                    <h3>Events & Galas</h3>
                    <p>
                        Join us at our signature events throughout the year. Attendance,
                        sponsorship, and auction donations all support our students.
                    </p>
                    <div class="upcoming-events">
                        <div class="event-item">
                            <div class="event-date">
                                <span class="month">MAR</span>
                                <span class="day">22</span>
                            </div>
                            <div class="event-details">
                                <h4>Spring Gala</h4>
                                <p>Evening of celebration honoring our community</p>
                            </div>
                        </div>
                        <div class="event-item">
                            <div class="event-date">
                                <span class="month">MAY</span>
                                <span class="day">10</span>
                            </div>
                            <div class="event-details">
                                <h4>Annual Auction</h4>
                                <p>Bid on exclusive items for scholarship support</p>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="btn btn-primary">View All Events</a>
                </div>
            </div>

            <div class="giving-panel" id="planned-panel">
                <div class="panel-content">
                    <div class="panel-icon">
                        <svg viewBox="0 0 64 64" width="64" height="64">
                            <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" stroke-width="2"/>
                            <circle cx="32" cy="32" r="12" fill="none" stroke="currentColor" stroke-width="2"/>
                            <path d="M32 20v24M20 32h24" fill="none" stroke="currentColor" stroke-width="2"/>
                        </svg>
                    </div>
                    <h3>Planned Giving</h3>
                    <p>
                        Create a lasting legacy by including The Girls' School in your
                        estate plans. Planned gifts provide stable, long-term support
                        for future generations of students.
                    </p>
                    <ul class="giving-list">
                        <li>Bequests in your will or trust</li>
                        <li>Charitable remainder trusts</li>
                        <li>Charitable lead trusts</li>
                        <li>Donor-advised funds</li>
                        <li>Life insurance beneficiaries</li>
                    </ul>
                    <a href="#" class="btn btn-primary">Learn About Legacy Giving</a>
                </div>
            </div>
        </div>
    </div>
</section>
```

**Animations**:
- Tab transitions with fade effect
- Progress ring animation
- Hover effects on event cards

---

### 5. Gratitude & Recognition Section
**Purpose**: Highlight appreciation for donors and volunteers

```html
<section class="gratitude-section" id="gratitude">
    <div class="container">
        <div class="section-header" data-animate="fade-up">
            <span class="section-tag">With Gratitude</span>
            <h2 class="section-title">Thank You to Our Community</h2>
            <p class="section-subtitle">
                Our donors, volunteers, and partners are the backbone of our mission.
                We are deeply grateful for your generosity.
            </p>
        </div>

        <div class="recognition-levels" data-animate="fade-up" data-stagger="150">
            <div class="recognition-card">
                <div class="recognition-header">
                    <div class="recognition-icon">
                        <svg viewBox="0 0 48 48" width="32" height="32">
                            <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" stroke-width="2"/>
                            <path d="M14 24l6 6 12-12" fill="none" stroke="currentColor" stroke-width="2"/>
                        </svg>
                    </div>
                    <h3>Visionaries</h3>
                </div>
                <p class="recognition-description">Gifts of $50,000+</p>
                <p class="recognition-impact">
                    Visionaries enable transformative initiatives that shape
                    our school's future for generations.
                </p>
            </div>

            <div class="recognition-card">
                <div class="recognition-header">
                    <div class="recognition-icon">
                        <svg viewBox="0 0 48 48" width="32" height="32">
                            <polygon points="24,4 30,18 46,18 34,28 38,44 24,34 10,44 14,28 2,18 18,18" fill="none" stroke="currentColor" stroke-width="2"/>
                        </svg>
                    </div>
                    <h3>Pioneers</h3>
                </div>
                <p class="recognition-description">Gifts of $25,000-$49,999</p>
                <p class="recognition-impact">
                    Pioneers lead the way in building exceptional educational
                    experiences for our students.
                </p>
            </div>

            <div class="recognition-card">
                <div class="recognition-header">
                    <div class="recognition-icon">
                        <svg viewBox="0 0 48 48" width="32" height="32">
                            <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" stroke-width="2"/>
                            <circle cx="24" cy="24" r="8" fill="currentColor"/>
                        </svg>
                    </div>
                    <h3>Champions</h3>
                </div>
                <p class="recognition-description">Gifts of $10,000-$24,999</p>
                <p class="recognition-impact">
                    Champions strengthen our programs and expand opportunities
                    for every student.
                </p>
            </div>

            <div class="recognition-card">
                <div class="recognition-header">
                    <div class="recognition-icon">
                        <svg viewBox="0 0 48 48" width="32" height="32">
                            <path d="M24 4l4 8 9 1-7 6 2 9-8-4-8 4 2-9-7-6 9-1z" fill="currentColor"/>
                        </svg>
                    </div>
                    <h3>Supporters</h3>
                </div>
                <p class="recognition-description">Gifts of $1,000-$9,999</p>
                <p class="recognition-impact">
                    Supporters provide essential resources that enhance daily
                    learning and growth.
                </p>
            </div>
        </div>

        <div class="volunteer-spotlight" data-animate="fade-up">
            <div class="spotlight-content">
                <span class="spotlight-tag">Volunteer Spotlight</span>
                <h3>Making a Difference Through Service</h3>
                <p>
                    Our volunteers contribute thousands of hours annually, from
                    serving on committees to mentoring students. Their dedication
                    exemplifies the spirit of community that makes The Girls' School
                    extraordinary.
                </p>
                <a href="#volunteer" class="btn btn-outline">Join Our Volunteers</a>
            </div>
            <div class="spotlight-visual">
                <div class="volunteer-stats">
                    <div class="vol-stat">
                        <span class="vol-number" data-count="250">0</span>
                        <span class="vol-label">Active Volunteers</span>
                    </div>
                    <div class="vol-stat">
                        <span class="vol-number" data-count="5000">0</span>
                        <span class="vol-label">Hours Contributed</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

**Animations**:
- Gentle hover lift on recognition cards
- Counter animations for volunteer stats

---

### 6. Community Involvement Section
**Purpose**: Expanded content about partnerships, parent involvement, events

```html
<section class="community-involvement" id="community">
    <div class="container">
        <div class="section-header" data-animate="fade-up">
            <span class="section-tag">Get Involved</span>
            <h2 class="section-title">Be Part of Our Community</h2>
            <p class="section-subtitle">
                There are many ways to connect with The Girls' School beyond
                financial contributions. Your time, expertise, and partnership
                enriches our community.
            </p>
        </div>

        <div class="community-grid" data-animate="fade-up" data-stagger="200">
            <div class="community-card">
                <div class="card-icon">
                    <svg viewBox="0 0 48 48" width="48" height="48">
                        <rect x="8" y="8" width="32" height="32" rx="4" fill="none" stroke="currentColor" stroke-width="2"/>
                        <path d="M8 16h32M16 8v8M32 8v8" fill="none" stroke="currentColor" stroke-width="2"/>
                    </svg>
                </div>
                <h3>Parent Association</h3>
                <p>
                    Join our vibrant Parent Association to connect with other families,
                    organize school events, and strengthen the home-school partnership.
                </p>
                <ul class="card-features">
                    <li>Monthly meetings and social events</li>
                    <li>Classroom volunteer opportunities</li>
                    <li>School-wide celebration committees</li>
                </ul>
                <a href="#" class="card-link">Learn More</a>
            </div>

            <div class="community-card">
                <div class="card-icon">
                    <svg viewBox="0 0 48 48" width="48" height="48">
                        <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" stroke-width="2"/>
                        <path d="M24 14v10l7 7" fill="none" stroke="currentColor" stroke-width="2"/>
                    </svg>
                </div>
                <h3>Corporate Partnerships</h3>
                <p>
                    Partner your business with The Girls' School through sponsorship
                    opportunities, employee matching programs, and career exploration.
                </p>
                <ul class="card-features">
                    <li>Event sponsorship packages</li>
                    <li>Employee giving programs</li>
                    <li>Career day participation</li>
                </ul>
                <a href="#" class="card-link">Explore Partnerships</a>
            </div>

            <div class="community-card">
                <div class="card-icon">
                    <svg viewBox="0 0 48 48" width="48" height="48">
                        <path d="M24 4c-8 0-15 8-15 18 0 12 15 22 15 22s15-10 15-22c0-10-7-18-15-18z" fill="none" stroke="currentColor" stroke-width="2"/>
                        <circle cx="24" cy="22" r="8" fill="none" stroke="currentColor" stroke-width="2"/>
                    </svg>
                </div>
                <h3>Alumni Network</h3>
                <p>
                    Reconnect with your alma mater and inspire current students
                    by sharing your journey and expertise.
                </p>
                <ul class="card-features">
                    <li>Alumni mentorship program</li>
                    <li>Career panels and presentations</li>
                    <li>Reunion events and gatherings</li>
                </ul>
                <a href="#" class="card-link">Join the Network</a>
            </div>

            <div class="community-card">
                <div class="card-icon">
                    <svg viewBox="0 0 48 48" width="48" height="48">
                        <rect x="6" y="10" width="36" height="28" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
                        <path d="M6 18h36M12 10v4M36 10v4" fill="none" stroke="currentColor" stroke-width="2"/>
                    </svg>
                </div>
                <h3>Career Opportunities</h3>
                <p>
                    Share your professional expertise with our students through
                    career days, job shadowing, and internship opportunities.
                </p>
                <ul class="card-features">
                    <li>Career day presentations</li>
                    <li>Job shadowing programs</li>
                    <li>Summer internship hosts</li>
                </ul>
                <a href="#" class="card-link">Share Your Story</a>
            </div>
        </div>

        <div class="community-events" data-animate="fade-up">
            <h3>Upcoming Community Events</h3>
            <div class="events-list">
                <div class="event-card">
                    <div class="event-date-badge">
                        <span class="month">FEB</span>
                        <span class="day">15</span>
                    </div>
                    <div class="event-info">
                        <h4>Parent-Teacher Conference</h4>
                        <p>Join us to celebrate student progress and discuss goals</p>
                        <span class="event-time">9:00 AM - 3:00 PM</span>
                    </div>
                </div>
                <div class="event-card">
                    <div class="event-date-badge">
                        <span class="month">MAR</span>
                        <span class="day">08</span>
                    </div>
                    <div class="event-info">
                        <h4>International Women's Day Celebration</h4>
                        <p>Honoring women who inspire and lead in our community</p>
                        <span class="event-time">2:00 PM - 5:00 PM</span>
                    </div>
                </div>
                <div class="event-card">
                    <div class="event-date-badge">
                        <span class="month">APR</span>
                        <span class="day">12</span>
                    </div>
                    <div class="event-info">
                        <h4>Earth Day Service Project</h4>
                        <p>Students, parents, and teachers working together</p>
                        <span class="event-time">10:00 AM - 2:00 PM</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

**Animations**:
- Staggered card entrance
- Hover effects on community cards

---

### 7. Call to Action Section
**Purpose**: Prominent animated buttons for donations, volunteering, event participation

```html
<section class="cta-section" id="donate">
    <div class="cta-background">
        <div class="cta-shapes">
            <div class="cta-shape cta-shape-1"></div>
            <div class="cta-shape cta-shape-2"></div>
            <div class="cta-shape cta-shape-3"></div>
        </div>
    </div>
    <div class="container">
        <div class="cta-content" data-animate="fade-up">
            <span class="cta-tag">Join Us Today</span>
            <h2 class="cta-title">Together, We Empower the Next Generation</h2>
            <p class="cta-subtitle">
                Your generosity opens doors of opportunity for young women.
                Whether you give your time, talent, or treasure, you become
                part of something extraordinary.
            </p>
            <div class="cta-buttons">
                <a href="#" class="btn btn-primary btn-large cta-btn" data-animate="fade-up" data-delay="200">
                    <span class="btn-text">Donate Now</span>
                    <span class="btn-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                        </svg>
                    </span>
                </a>
                <a href="#volunteer" class="btn btn-outline btn-large cta-btn" data-animate="fade-up" data-delay="400">
                    <span class="btn-text">Volunteer With Us</span>
                    <span class="btn-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" fill="none" stroke="currentColor" stroke-width="2"/>
                            <circle cx="8.5" cy="7" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
                            <path d="M20 8v6M23 11h-6" fill="none" stroke="currentColor" stroke-width="2"/>
                        </svg>
                    </span>
                </a>
                <a href="#gala" class="btn btn-outline btn-large cta-btn" data-animate="fade-up" data-delay="600">
                    <span class="btn-text">Attend an Event</span>
                    <span class="btn-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <rect x="3" y="4" width="18" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
                            <path d="M16 2v4M8 2v4M3 10h18" fill="none" stroke="currentColor" stroke-width="2"/>
                        </svg>
                    </span>
                </a>
            </div>
            <div class="cta-contact" data-animate="fade-up" data-delay="800">
                <p>Questions about giving?</p>
                <a href="mailto:giving@excellencegirls.edu">giving@excellencegirls.edu</a>
                <span class="cta-divider">|</span>
                <a href="tel:+15551234567">(555) 123-4567</a>
            </div>
        </div>
    </div>
</section>
```

**Animations**:
- Floating background shapes
- Staggered button entrance
- Button hover: scale and glow effect

---

## CSS Architecture

### New CSS Variables
```css
/* Support Page Specific */
--support-primary: #2d5a7b;
--support-secondary: #4a90a4;
--support-accent: #e8a87c;
--support-light: #f8f9fa;
--support-glass: rgba(255, 255, 255, 0.1);
--support-glass-border: rgba(255, 255, 255, 0.2);
```

### Key Animation Classes
```css
/* Intro animations */
.support-intro { min-height: 85vh; position: relative; overflow: hidden; }
.intro-headline { font-size: clamp(2.5rem, 5vw, 4rem); line-height: 1.2; }
.intro-actions { display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem; }

/* Card animations */
.impact-card { transition: transform var(--transition-base), box-shadow var(--transition-base); }
.impact-card:hover { transform: translateY(-8px); box-shadow: var(--shadow-xl); }

/* Tab animations */
.giving-panel { opacity: 0; transform: translateX(20px); transition: all var(--transition-slow); }
.giving-panel.active { opacity: 1; transform: translateX(0); }

/* Button micro-interactions */
.cta-btn { position: relative; overflow: hidden; }
.cta-btn::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); transition: left var(--transition-slow); }
.cta-btn:hover::before { left: 100%; }
```

---

## JavaScript Enhancements

### New Animation Functions
```javascript
// Tab switching functionality
function initGivingTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.giving-panel');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update active panel with animation
            panels.forEach(panel => {
                if (panel.id === target + '-panel') {
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            });
        });
    });
}

// Floating shapes animation
function initFloatingShapes() {
    const shapes = document.querySelectorAll('.floating-shapes > *');
    shapes.forEach((shape, index) => {
        shape.style.animationDelay = `${index * 0.5}s`;
    });
}

// Counter animation enhancement
function animateStatsOnScroll() {
    const stats = document.querySelectorAll('.stat-number, .vol-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
 stats.forEach(stat => observer.observe(stat));
}
```

---

## Implementation Order

1. **Update Support.html**
   - Replace hero section with animated intro
   - Add new sections in logical order
   - Add appropriate data-animate attributes

2. **Extend CSS**
   - Add new CSS variables for support page
   - Create section-specific styles
   - Add animation classes
   - Implement responsive design

3. **Enhance JavaScript**
   - Add tab switching functionality
   - Add floating shapes animation
   - Extend counter animations
   - Add scroll-triggered effects

4. **Testing**
   - Verify all animations work smoothly
   - Test responsiveness across devices
   - Check accessibility (keyboard nav, screen readers)
   - Validate performance (animation frame usage)

---

## Estimated Complexity
- **HTML Changes**: Moderate (significant restructuring)
- **CSS Additions**: Moderate (new sections, animations)
- **JavaScript**: Low (enhancements to existing patterns)
- **Performance Impact**: Low (CSS transforms, IntersectionObserver)

---

## Files to Modify
1. `support.html` - Complete restructuring
2. `css/styles.css` - Add support page styles
3. `js/animations.js` - Add new animation functions
