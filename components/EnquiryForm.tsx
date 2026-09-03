'use client';

import { useState } from 'react';
import { COMPANY, SERVICES } from '@/lib/company';

const INITIAL = {
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: ''
};

export default function EnquiryForm() {
    const [form, setForm] = useState(INITIAL);
    const [sent, setSent] = useState(false);

    function update(field: keyof typeof INITIAL, value: string) {
        setForm((prev) => ({ ...prev, [field]: value }));
        setSent(false);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const subject = `Project enquiry${form.service ? ` — ${form.service}` : ''}`;
        const body = [
            `Name: ${form.name}`,
            `Email: ${form.email}`,
            `Phone: ${form.phone}`,
            `Service required: ${form.service || 'Not specified'}`,
            `Project location: ${form.location || 'Not specified'}`,
            '',
            'Details:',
            form.message
        ].join('\n');

        // Copy the Gmail address so enquiries still land if the domain mailbox
        // is not yet receiving. Encoded with encodeURIComponent rather than
        // URLSearchParams, which writes spaces as "+" — mail clients show those
        // literally in the message body instead of as spaces.
        const query = [
            `cc=${encodeURIComponent(COMPANY.emailAlt)}`,
            `subject=${encodeURIComponent(subject)}`,
            `body=${encodeURIComponent(body)}`
        ].join('&');

        window.location.href = `${COMPANY.emailHref}?${query}`;
        setSent(true);
    }

    return (
        <form onSubmit={handleSubmit} noValidate={false}>
            <div className="row g-3">
                <div className="col-md-6">
                    <label className="form-label" htmlFor="name">
                        Full name
                    </label>
                    <input
                        id="name"
                        className="form-control"
                        required
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label" htmlFor="email">
                        Email address
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="form-control"
                        required
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label" htmlFor="phone">
                        Phone number
                    </label>
                    <input
                        id="phone"
                        className="form-control"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label" htmlFor="service">
                        Service required
                    </label>
                    <select
                        id="service"
                        className="form-select"
                        value={form.service}
                        onChange={(e) => update('service', e.target.value)}
                    >
                        <option value="">Select a service</option>
                        {SERVICES.map((s) => (
                            <option key={s.slug} value={s.title}>
                                {s.title}
                            </option>
                        ))}
                        <option value="Other">Other / not sure</option>
                    </select>
                </div>
                <div className="col-12">
                    <label className="form-label" htmlFor="location">
                        Project location
                    </label>
                    <input
                        id="location"
                        className="form-control"
                        placeholder="e.g. Wuse 2, Abuja"
                        value={form.location}
                        onChange={(e) => update('location', e.target.value)}
                    />
                </div>
                <div className="col-12">
                    <label className="form-label" htmlFor="message">
                        Tell us about the project
                    </label>
                    <textarea
                        id="message"
                        className="form-control"
                        rows={5}
                        required
                        value={form.message}
                        onChange={(e) => update('message', e.target.value)}
                    />
                </div>
                <div className="col-12 d-flex flex-wrap align-items-center gap-3">
                    <button type="submit" className="btn btn-brand btn-lg">
                        Send enquiry
                        <i className="fa-solid fa-paper-plane ms-2" aria-hidden="true"></i>
                    </button>
                    <a href={COMPANY.phoneHref} className="btn btn-outline-brand btn-lg">
                        <i className="fa-solid fa-phone me-2" aria-hidden="true"></i>
                        Call instead
                    </a>
                </div>
                {sent && (
                    <div className="col-12">
                        <p className="text-muted small mb-0">
                            Your email application should now be open with the enquiry filled in. If nothing happened, email
                            us directly at <a href={COMPANY.emailHref}>{COMPANY.email}</a> or{' '}
                            <a href={COMPANY.emailAltHref}>{COMPANY.emailAlt}</a>.
                        </p>
                    </div>
                )}
            </div>
        </form>
    );
}
