import React from 'react'

export default function Item() {
  return (
    <div className='main-list'>
    <div className='item-1'>
      <h1>Free</h1>
      <p>Free Plan for all users</p>
      <ul>
        <li>2 Workspaces</li>
        <li>10 Collaborators</li>
        <li>Unlimited Data</li>
        <li>Unified Analytics</li>
      </ul>
      <button className='discription'>
        Get Started Free
      </button>
    </div>
    <div className='item-2'>
      <h1>$15<span className='month'>/month</span></h1>
      <p>Ideal for small Businesses</p>
      <ul>
        <li>Unlimited Workspaces</li>
        <li>Unlimited Collaborators</li>
        <li>15 GB Data Storage</li>
        <li>Unified Analytics</li>
        <li>Mobiles app Access</li>
      </ul>
      <button className='discription'>
        Get Started Free
      </button>
    </div>
    <div className='item-3'>
      <h1>$25<span className='month'>/month</span></h1>
      <p>Works best for enterprise companies</p>
      <ul>
        <li>Unlimited Workspaces</li>
        <li>Unlimited Collaborators</li>
        <li>Unlimited Data Storage</li>
        <li>Time Tracking Module</li>
        <li>Unified Analytics</li>
        <li>HR & Payroll</li>
      </ul>
      <button className='discription'>
        Get Started Free
      </button>
    </div>
    </div>
  )
}
