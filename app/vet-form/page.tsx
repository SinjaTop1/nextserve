'use client';

export default function VetFormPage() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Veterinary Clinic Website Setup Form</title>
        <style dangerouslySetInnerHTML={{
          __html: `
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                padding: 20px;
            }

            .container {
                max-width: 800px;
                margin: 0 auto;
                background: white;
                border-radius: 20px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                overflow: hidden;
            }

            .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 40px 30px;
                text-align: center;
            }

            .header h1 {
                font-size: 2.5em;
                margin-bottom: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
            }

            .header p {
                font-size: 1.1em;
                opacity: 0.95;
                line-height: 1.6;
            }

            .form-content {
                padding: 40px 30px;
            }

            .section {
                margin-bottom: 35px;
                padding: 25px;
                background: #f8f9fa;
                border-radius: 12px;
                border: 1px solid #e9ecef;
                transition: all 0.3s ease;
            }

            .section:hover {
                box-shadow: 0 5px 15px rgba(0,0,0,0.08);
                transform: translateY(-2px);
            }

            .section-title {
                font-size: 1.3em;
                color: #333;
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                gap: 10px;
                font-weight: 600;
            }

            .form-group {
                margin-bottom: 20px;
            }

            label {
                display: block;
                margin-bottom: 8px;
                color: #495057;
                font-weight: 500;
                font-size: 0.95em;
            }

            input[type="text"],
            input[type="email"],
            input[type="tel"],
            input[type="time"],
            input[type="url"],
            textarea,
            select {
                width: 100%;
                padding: 12px 15px;
                border: 2px solid #e9ecef;
                border-radius: 8px;
                font-size: 1em;
                transition: all 0.3s ease;
                font-family: inherit;
            }

            input:focus,
            textarea:focus,
            select:focus {
                outline: none;
                border-color: #667eea;
                box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
            }

            textarea {
                resize: vertical;
                min-height: 100px;
            }

            .checkbox-group {
                display: flex;
                flex-direction: column;
                gap: 12px;
                margin-top: 10px;
            }

            .checkbox-item {
                display: flex;
                align-items: center;
                padding: 10px;
                background: white;
                border-radius: 8px;
                transition: all 0.2s ease;
            }

            .checkbox-item:hover {
                background: #f1f3f5;
            }

            input[type="checkbox"],
            input[type="radio"] {
                margin-right: 10px;
                width: 18px;
                height: 18px;
                cursor: pointer;
            }

            .time-group {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 15px;
            }

            .day-hours {
                display: grid;
                grid-template-columns: 120px 1fr 1fr;
                gap: 10px;
                align-items: center;
                margin-bottom: 10px;
                padding: 10px;
                background: white;
                border-radius: 8px;
            }

            .day-label {
                font-weight: 500;
                color: #495057;
            }

            .submit-btn {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 18px 40px;
                border: none;
                border-radius: 10px;
                font-size: 1.1em;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                display: block;
                margin: 40px auto 20px;
                box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
            }

            .submit-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
            }

            .submit-btn:active {
                transform: translateY(0);
            }

            .note-box {
                background: #fff3cd;
                border: 1px solid #ffc107;
                border-radius: 8px;
                padding: 15px;
                margin-top: 30px;
            }

            .note-box h4 {
                color: #856404;
                margin-bottom: 10px;
                display: flex;
                align-items: center;
                gap: 8px;
            }

            .note-box p {
                color: #856404;
                line-height: 1.6;
                font-size: 0.95em;
            }

            .file-input-wrapper {
                position: relative;
                overflow: hidden;
                display: inline-block;
                width: 100%;
            }

            .file-input-wrapper input[type=file] {
                position: absolute;
                left: -9999px;
            }

            .file-input-label {
                display: block;
                padding: 12px 15px;
                background: white;
                border: 2px dashed #667eea;
                border-radius: 8px;
                text-align: center;
                cursor: pointer;
                transition: all 0.3s ease;
                color: #667eea;
                font-weight: 500;
            }

            .file-input-label:hover {
                background: #f8f9fa;
                border-color: #764ba2;
            }

            @media (max-width: 600px) {
                .header h1 {
                    font-size: 1.8em;
                }
                
                .time-group,
                .day-hours {
                    grid-template-columns: 1fr;
                }
                
                .day-hours {
                    gap: 8px;
                }
                
                .form-content {
                    padding: 20px;
                }
            }

            .required {
                color: #dc3545;
            }
          `
        }} />
      </head>
      <body>
        <div className="container">
          <div className="header">
            <h1>🏥 Clinic Website Setup Form</h1>
            <p>Thank you for trusting us! This form gives us everything we need to deliver your website, booking system, and client-ready online presence within 2-3 days.</p>
          </div>

          <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" encType="multipart/form-data" className="form-content">
            
            {/* Basic Clinic Info */}
            <div className="section">
              <h2 className="section-title">🏥 Basic Clinic Information</h2>
              
              <div className="form-group">
                <label htmlFor="clinic-name">Clinic Name <span className="required">*</span></label>
                <input type="text" id="clinic-name" name="clinic_name" required />
              </div>

              <div className="form-group">
                <label htmlFor="address">Main Address <span className="required">*</span></label>
                <input type="text" id="address" name="address" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number (for calls on site) <span className="required">*</span></label>
                <input type="tel" id="phone" name="phone" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email (for contact forms) <span className="required">*</span></label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="description">Clinic Description / About Us (2-3 sentences) <span className="required">*</span></label>
                <textarea id="description" name="description" required></textarea>
              </div>
            </div>

            {/* Working Hours */}
            <div className="section">
              <h2 className="section-title">🕐 Working Hours</h2>
              
              <div className="day-hours">
                <span className="day-label">Monday</span>
                <input type="time" name="monday_open" placeholder="Open" />
                <input type="time" name="monday_close" placeholder="Close" />
              </div>

              <div className="day-hours">
                <span className="day-label">Tuesday</span>
                <input type="time" name="tuesday_open" placeholder="Open" />
                <input type="time" name="tuesday_close" placeholder="Close" />
              </div>

              <div className="day-hours">
                <span className="day-label">Wednesday</span>
                <input type="time" name="wednesday_open" placeholder="Open" />
                <input type="time" name="wednesday_close" placeholder="Close" />
              </div>

              <div className="day-hours">
                <span className="day-label">Thursday</span>
                <input type="time" name="thursday_open" placeholder="Open" />
                <input type="time" name="thursday_close" placeholder="Close" />
              </div>

              <div className="day-hours">
                <span className="day-label">Friday</span>
                <input type="time" name="friday_open" placeholder="Open" />
                <input type="time" name="friday_close" placeholder="Close" />
              </div>

              <div className="day-hours">
                <span className="day-label">Saturday</span>
                <input type="time" name="saturday_open" placeholder="Open" />
                <input type="time" name="saturday_close" placeholder="Close" />
              </div>

              <div className="day-hours">
                <span className="day-label">Sunday</span>
                <input type="time" name="sunday_open" placeholder="Open" />
                <input type="time" name="sunday_close" placeholder="Close" />
              </div>
            </div>

            {/* Team Info */}
            <div className="section">
              <h2 className="section-title">👩‍⚕️ Team Information (Optional but Recommended)</h2>
              
              <div className="form-group">
                <label htmlFor="team-members">Names and roles of team members</label>
                <textarea id="team-members" name="team_members" placeholder="e.g., Dr. Sarah Smith - Lead Veterinarian&#10;Dr. John Doe - Veterinary Surgeon&#10;Mary Johnson - Veterinary Nurse"></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="team-photos">Team Photos</label>
                <div className="file-input-wrapper">
                  <input type="file" id="team-photos" name="team_photos" multiple accept="image/*" />
                  <label htmlFor="team-photos" className="file-input-label">
                    📸 Click to upload team photos (or send via WhatsApp/Email)
                  </label>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="section">
              <h2 className="section-title">🐾 Services Offered</h2>
              
              <div className="form-group">
                <label htmlFor="services">Please list your main services <span className="required">*</span></label>
                <textarea id="services" name="services" required placeholder="e.g., Vaccinations, Dental Care, Grooming, Surgery, Emergency Care, X-Ray, Laboratory Services"></textarea>
              </div>
            </div>

            {/* Visual Materials */}
            <div className="section">
              <h2 className="section-title">📸 Visual Materials</h2>
              
              <div className="form-group">
                <label htmlFor="logo">Clinic Logo (high-quality .png, .svg, or .jpg)</label>
                <div className="file-input-wrapper">
                  <input type="file" id="logo" name="logo" accept="image/*,.svg" />
                  <label htmlFor="logo" className="file-input-label">
                    🎨 Click to upload logo
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="clinic-images">Clinic Images (reception, treatment rooms, etc.)</label>
                <div className="file-input-wrapper">
                  <input type="file" id="clinic-images" name="clinic_images" multiple accept="image/*" />
                  <label htmlFor="clinic-images" className="file-input-label">
                    📷 Click to upload clinic images
                  </label>
                </div>
              </div>
            </div>

            {/* Booking Link Setup */}
            <div className="section">
              <h2 className="section-title">🌐 Booking Link Setup</h2>
              
              <div className="form-group">
                <label>Would you like us to embed online booking?</label>
                <div className="checkbox-group">
                  <div className="checkbox-item">
                    <input type="radio" id="calendly" name="booking_system" value="calendly" />
                    <label htmlFor="calendly">Yes, use Calendly (we'll help set it up if needed)</label>
                  </div>
                  <div className="checkbox-item">
                    <input type="radio" id="other-system" name="booking_system" value="other" />
                    <label htmlFor="other-system">We use another system</label>
                  </div>
                  <div className="checkbox-item">
                    <input type="radio" id="not-sure" name="booking_system" value="not_sure" />
                    <label htmlFor="not-sure">Not sure yet</label>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="booking-link">If using another system, please provide link:</label>
                <input type="url" id="booking-link" name="booking_link" placeholder="https://..." />
              </div>
            </div>

            {/* Legal Pages */}
            <div className="section">
              <h2 className="section-title">📝 Legal Pages</h2>
              
              <div className="form-group">
                <label>Impressum & Datenschutz / Privacy Policy:</label>
                <div className="checkbox-group">
                  <div className="checkbox-item">
                    <input type="radio" id="have-legal" name="legal_pages" value="have" />
                    <label htmlFor="have-legal">We already have them</label>
                  </div>
                  <div className="checkbox-item">
                    <input type="radio" id="need-legal" name="legal_pages" value="need_help" />
                    <label htmlFor="need-legal">We need help generating them</label>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="legal-content">If you have them, please paste below:</label>
                <textarea id="legal-content" name="legal_content" placeholder="Paste your legal pages content here"></textarea>
              </div>
            </div>

            {/* Optional Add-ons */}
            <div className="section">
              <h2 className="section-title">📢 Optional Add-ons</h2>
              <p style={{marginBottom: '15px', color: '#6c757d'}}>Select any features you'd like included:</p>
              
              <div className="checkbox-group">
                <div className="checkbox-item">
                  <input type="checkbox" id="announcements" name="addons" value="announcements" />
                  <label htmlFor="announcements">Announcements page (closures, holiday hours)</label>
                </div>
                <div className="checkbox-item">
                  <input type="checkbox" id="staff-bios" name="addons" value="staff_bios" />
                  <label htmlFor="staff-bios">Staff bios and photos</label>
                </div>
                <div className="checkbox-item">
                  <input type="checkbox" id="testimonials" name="addons" value="testimonials" />
                  <label htmlFor="testimonials">Testimonials section</label>
                </div>
                <div className="checkbox-item">
                  <input type="checkbox" id="google-maps" name="addons" value="google_maps" />
                  <label htmlFor="google-maps">Google Maps embed</label>
                </div>
                <div className="checkbox-item">
                  <input type="checkbox" id="social-media" name="addons" value="social_media" />
                  <label htmlFor="social-media">Social media links</label>
                </div>
              </div>

              <div className="form-group" style={{marginTop: '20px'}}>
                <label htmlFor="social-handles">If social media selected, please provide handles:</label>
                <input type="text" id="social-handles" name="social_handles" placeholder="Facebook: @yourclinic, Instagram: @yourclinic" />
              </div>
            </div>

            {/* Approval & Communication */}
            <div className="section">
              <h2 className="section-title">🔄 Approval & Communication</h2>
              
              <div className="form-group">
                <label htmlFor="contact-name">Point of contact name <span className="required">*</span></label>
                <input type="text" id="contact-name" name="contact_name" required />
              </div>

              <div className="form-group">
                <label htmlFor="contact-info">Contact Email or WhatsApp <span className="required">*</span></label>
                <input type="text" id="contact-info" name="contact_info" required />
              </div>

              <div className="form-group">
                <label>How would you like to review the draft website?</label>
                <div className="checkbox-group">
                  <div className="checkbox-item">
                    <input type="radio" id="live-preview" name="review_method" value="live_preview" />
                    <label htmlFor="live-preview">Live preview link</label>
                  </div>
                  <div className="checkbox-item">
                    <input type="radio" id="pdf-screenshots" name="review_method" value="pdf_screenshots" />
                    <label htmlFor="pdf-screenshots">PDF screenshots</label>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Notes */}
            <div className="note-box">
              <h4>🔒 Final Notes – Review & Revisions Policy</h4>
              <p>To ensure smooth delivery and respect everyone's time:</p>
              <ul style={{marginLeft: '20px', marginTop: '10px'}}>
                <li>Once you submit the details above, we'll begin working on your clinic's website and booking system.</li>
                <li>Within 2-3 days, you'll receive a preview version for review.</li>
                <li>You'll have one opportunity to request changes or adjustments.</li>
                <li>After that, we'll publish the final version.</li>
              </ul>
              <p style={{marginTop: '10px'}}>This keeps the process fast, fair, and efficient for everyone. Thank you for your trust!</p>
            </div>

            <button type="submit" className="submit-btn">✨ Submit Form & Get Started</button>
          </form>
        </div>

        <script dangerouslySetInnerHTML={{
          __html: `
            // Add file name display when files are selected
            document.querySelectorAll('input[type="file"]').forEach(input => {
                input.addEventListener('change', function() {
                    const label = this.nextElementSibling;
                    const fileCount = this.files.length;
                    if (fileCount > 0) {
                        const text = fileCount === 1 ? this.files[0].name : \`\${fileCount} files selected\`;
                        label.textContent = \`✅ \${text}\`;
                        label.style.color = '#28a745';
                        label.style.borderColor = '#28a745';
                    }
                });
            });

            // Show/hide booking link field based on selection
            document.querySelectorAll('input[name="booking_system"]').forEach(radio => {
                radio.addEventListener('change', function() {
                    const linkField = document.getElementById('booking-link').parentElement;
                    if (this.value === 'other') {
                        linkField.style.display = 'block';
                    } else {
                        linkField.style.display = 'none';
                    }
                });
            });

            // Show/hide social handles field
            document.getElementById('social-media').addEventListener('change', function() {
                const socialField = document.getElementById('social-handles').parentElement;
                socialField.style.display = this.checked ? 'block' : 'none';
            });

            // Initial hide for conditional fields
            document.getElementById('booking-link').parentElement.style.display = 'none';
            document.getElementById('social-handles').parentElement.style.display = 'none';
          `
        }} />
      </body>
    </html>
  );
}


