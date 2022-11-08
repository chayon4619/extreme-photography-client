import React from 'react';

const Review = () => {
    return (
        <div>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-400 text-gray-100">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold">Leroy Jenkins</h4>
                            <span className="text-xs text-gray-900">2 days ago</span>
                        </div>
                    </div>
                </div>
                <div className="p-4 space-y-2 text-sm text-gray-900">
                    <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                    <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                </div>
            </div>
        </div>
    );
};

export default Review;