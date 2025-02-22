// import React from 'react'
import '../css/home.css'
import { Link } from "react-router";


export default function Home() {
  return (
    <section id="home">
      <div>
        <h1>Welcome to Paradise Nursery</h1>
        <div className="separator"></div>
        <p className='short-description'>
          At Paradise Nursery, we strive to create a peaceful, environmentally-friendly, and inclusive nursery
        </p>
        <Link to="/plants" id='get-started-link'>Get started</Link>
      </div>
      <div className="full-description">
        <h2>Welcome to Paradise Nursery</h2>
        <p>Welcome to <strong>Paradise Nursery</strong>, a community-led nursery that values the importance of creating a safe, welcoming, and inclusive environment for all children. Our mission is to provide a safe, healthy, and supportive space where parents can grow and thrive.
        </p>
        <p>
          We are committed to supporting local businesses and organizations that prioritize the well-being of our children and their families. By supporting our local businesses, we can create a stronger community, attract more parents, and foster a more inclusive environment for all children.
        </p>
        <p>
          If you&apos;re interested in becoming a volunteer at Paradise Nursery, please contact us at <a href="mailto:info@paradisenursery.org">info@paradisenursery.org</a> or visit our website at <a href="https://paradisenursery.org">paradisenursery.org</a>. We look forward to welcoming you to our community!
        </p>
        <p>
          <strong>About Paradise Nursery:</strong>
          <br />
          Paradise Nursery is a non-profit organization dedicated to creating a safe, welcoming, and inclusive nursery environment for all children. We strive to provide a safe, healthy, and supportive space where parents can grow and thrive.
        </p>
      </div>
    </section>
  )
}
