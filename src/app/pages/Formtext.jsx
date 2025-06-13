'use client';
import { useState } from 'react';

function Formtext({ fileUrl }) {
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, fileUrl }), // ✅ Include file URL
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Error: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      setStatus('Error: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className='text-[#353535] md:text-[18px] font-medium'>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Robin Sampson"
            className="border-b outline-none py-2"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className='text-[#353535] md:text-[18px] font-medium'>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Robin@gmail.com"
            className="border-b outline-none py-2"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <label className='text-[#353535] md:text-[18px] font-medium'>Your Subject</label>
      <input
        type="text"
        name="subject"
        placeholder="Lorem Ipsum is simply dummy"
        className="border-b outline-none w-full py-2"
        value={formData.subject}
        onChange={handleChange}
      />
      <label className='text-[#353535] md:text-[18px] font-medium'>Message</label>
      <textarea
        name="message"
        placeholder="Write here your message"
        className="border-b outline-none w-full py-2 resize-none h-32"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="bg-[#353535] text-white py-2 px-6 rounded-full hover:bg-[#24462f] transition-all"
      >
        Send Message
      </button>

      {status && <p className="mt-4">{status}</p>}
    </form>
  );
}

export default Formtext;
