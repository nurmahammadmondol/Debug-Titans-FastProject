import Image from 'next/image';
import React from 'react';

const LatestCourse = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Latest Courses</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
        {/* Course Card 1 */}
        <div className="card bg-[#eef8ff] shadow-xl">
          <figure className="w-full">
            <Image
              src="https://i.ibb.co.com/C5ZSwwPS/asset-16.jpg"
              alt="React Course"
              width={300}
              height={200}
              className="w-full h-56 object-cover"
            />
          </figure>
          <div className="card-body">
            <span className="badge badge-primary">Web Development</span>
            <h2 className="card-title">
              Build Dynamic Web Applications with React
            </h2>
            <p>Published: 10-27-2024</p>
            <p>Author: Apps Bots</p>
            <p className="text-lg font-bold">$79</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>

        {/* Course Card 2 */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <Image
              src="https://i.ibb.co.com/mVkQNhR8/asset-17.jpg"
              alt="UI/UX Course"
              width={300}
              height={200}
            />
          </figure>
          <div className="card-body">
            <span className="badge badge-secondary">UX/UI Design</span>
            <h2 className="card-title">Create Stunning User Interfaces</h2>
            <p>Published: 10-27-2024</p>
            <p>Author: Apps Bots</p>
            <p className="text-lg font-bold">$50</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>

        {/* Course Card 3 */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <Image
              src="https://i.ibb.co.com/7xWTcRGt/asset-18.jpg"
              alt="Game Development"
              width={300}
              height={200}
            />
          </figure>
          <div className="card-body">
            <span className="badge badge-error">Game Development</span>
            <h2 className="card-title">Game Development Mastery</h2>
            <p>Published: 11-04-2024</p>
            <p>Author: Apps Bots</p>
            <p className="text-lg font-bold">$199</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCourse;
