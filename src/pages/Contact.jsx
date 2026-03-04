import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../components/common/components/HeroSection';
import { contactHero } from '../components/common/data/heroData';

const Contact = () => {
    const contentRef = useRef(null);
    const isInView = useInView(contentRef, { once: true, margin: "-100px" });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <HeroSection {...contactHero} />

            {/* Google Map Embed */}
            <div className='max-w-12xl mx-auto px-6 py-8'>
                <div className='w-full md:w-3/4 lg:w-1/2 mx-auto text-center'>
                    <h3 className="text-xl font-semibold mb-6">Map</h3>
                    <div className="w-full h-72 rounded-xl shadow-lg overflow-hidden border border-gray-200">
                        <iframe
                            title="Brahma Valley Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120012.53937557008!2d73.42349089726565!3d19.950016300000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddf3443b96f067%3A0x34188a49959a588d!2sBrahma%20Valley%20College%20of%20Engineering%20and%20Research%20Institute!5e0!3m2!1sen!2sin!4v1771669327413!5m2!1sen!2sin"
                            className="w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Contact Details + Form */}
            <section ref={contentRef} className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-8 items-start">

                    {/* Left — Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-md p-8"
                    >
                        <h2 className="text-2xl font-bold text-red-600 mb-6">Contact Details</h2>

                        {/* Central Office */}
                        <div className="mb-6">
                            <h3 className="font-bold text-gray-900 text-base mb-3">Central Office Address</h3>
                            <p className="text-gray-700 text-sm leading-relaxed mb-3">
                                Palika Bazar Complex, Near Railway Booking Office, Sharanpur-Trimbak Link Road, Nashik-422002.
                            </p>
                            <p className="text-sm text-gray-700">
                                <span className="font-bold text-blue-600">Tel:</span>{' '}
                                <span>(0253) 2311244</span>
                            </p>
                            <p className="text-sm text-gray-700">
                                <span className="font-bold text-red-500">Mob:</span>{' '}
                                <span>09011226688</span>
                            </p>
                            <p className="text-sm text-gray-700">
                                <span className="font-bold text-gray-800">Telefax:</span>{' '}
                                <span>(0253) 2311244</span>
                            </p>
                        </div>

                        {/* Campus Address */}
                        <div className="mb-6">
                            <h3 className="font-bold text-gray-900 text-base mb-3">Campus Address</h3>
                            <p className="text-gray-700 text-sm leading-relaxed mb-3">
                                Brahma Valley Educational Campus,<br />
                                Trimbak Road, Anjaneri,<br />
                                Nashik-422213.
                            </p>
                            <p className="text-sm text-gray-700">
                                <span className="font-bold text-blue-600">Tel:</span>{' '}
                                <span>(02594) 299021/022</span>
                            </p>
                            <p className="text-sm text-gray-700">
                                <span className="font-bold text-red-500">Mob:</span>{' '}
                                <span>9881334477, 8378950000, 8378960000</span>
                            </p>
                            <p className="text-sm text-gray-700">
                                <span className="font-bold text-gray-800">E-mail:</span>{' '}
                                <a
                                    href="mailto:principal.bvcte.0778@gmail.com"
                                    className="text-blue-600 hover:underline"
                                >
                                    principal.bvcte.0778@gmail.com
                                </a>
                            </p>
                        </div>

                        {/* Campus Accessibility */}
                        <div>
                            <h3 className="font-bold text-gray-900 text-base mb-3">Campus Accessibility</h3>
                            <ul className="list-disc list-outside pl-5 space-y-1 text-sm text-gray-700">
                                <li>20 KM from Nashik City (by road)</li>
                                <li>180 KM from Aurangabad (by road)</li>
                                <li>30 KM from Nashik Road Station / 65 KM from Manmad</li>
                                <li>40 KM to Ozar Airport / 180 KM to Mumbai</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right — Send Message Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="bg-white rounded-2xl shadow-md p-8"
                    >
                        <h2 className="text-2xl font-bold text-red-600 mb-6">Send Us a Message</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name + Email row */}
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                                />
                            </div>

                            {/* Subject */}
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                            />

                            {/* Message */}
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={8}
                                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400 resize-y"
                            />

                            {/* Submit */}
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-gray-900 hover:bg-gray-700 text-white font-semibold px-8 py-2.5 rounded-md text-sm transition-colors duration-200"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default Contact;