import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCloudUploadAlt,
    faBed,
    faBath,
    faRulerCombined,
    faCheckCircle,
    faTimesCircle,
    faPlayCircle
} from "@fortawesome/free-solid-svg-icons";

const UploadProperty = () => {
    const fileInputRef = useRef(null);
    const [selectedMedia, setSelectedMedia] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        address: "",
        category: "Rent",
        bedrooms: "",
        bathrooms: "",
        area: "",
        description: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleMediaChange = (e) => {
        const files = Array.from(e.target.files);
        const newMedia = files.map(file => ({
            id: Math.random().toString(36).substr(2, 9),
            file: file,
            preview: URL.createObjectURL(file),
            type: file.type.startsWith('image/') ? 'image' : 'video'
        }));
        setSelectedMedia(prev => [...prev, ...newMedia]);

        // Reset file input so same file can be selected again if removed
        e.target.value = "";
    };

    const removeMedia = (id) => {
        setSelectedMedia(prev => {
            const itemToRemove = prev.find(item => item.id === id);
            if (itemToRemove) {
                URL.revokeObjectURL(itemToRemove.preview);
            }
            return prev.filter(item => item.id !== id);
        });
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Property "${formData.title}" uploaded successfully with ${selectedMedia.length} media items!`);

        // Cleanup previews
        selectedMedia.forEach(item => URL.revokeObjectURL(item.preview));

        setFormData({
            title: "",
            price: "",
            address: "",
            category: "Rent",
            bedrooms: "",
            bathrooms: "",
            area: "",
            description: ""
        });
        setSelectedMedia([]);
    };

    return (
        <div className="upload-property">
            <h2 className="mb-4 fw-bold">Upload New Property</h2>

            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="row g-4">
                        <div className="col-12">
                            <label className="form-label fw-semibold">Property Title</label>
                            <input
                                type="text"
                                name="title"
                                className="form-control form-control-lg bg-light border-0"
                                placeholder="e.g. Modern 4 Bedroom Semi-Detached House"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label fw-semibold">Price (₦)</label>
                            <input
                                type="number"
                                name="price"
                                className="form-control bg-light border-0"
                                placeholder="0.00"
                                value={formData.price}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label fw-semibold">Category</label>
                            <select
                                name="category"
                                className="form-select bg-light border-0"
                                value={formData.category}
                                onChange={handleChange}
                            >
                                <option>Rent</option>
                                <option>Sale</option>
                                <option>Lease</option>
                            </select>
                        </div>

                        <div className="col-12">
                            <label className="form-label fw-semibold">Full Address</label>
                            <input
                                type="text"
                                name="address"
                                className="form-control bg-light border-0"
                                placeholder="Street address, City, State"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-4">
                            <label className="form-label fw-semibold">Bedrooms</label>
                            <div className="input-group">
                                <span className="input-group-text bg-light border-0"><FontAwesomeIcon icon={faBed} /></span>
                                <input
                                    type="number"
                                    name="bedrooms"
                                    className="form-control bg-light border-0"
                                    value={formData.bedrooms}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <label className="form-label fw-semibold">Bathrooms</label>
                            <div className="input-group">
                                <span className="input-group-text bg-light border-0"><FontAwesomeIcon icon={faBath} /></span>
                                <input
                                    type="number"
                                    name="bathrooms"
                                    className="form-control bg-light border-0"
                                    value={formData.bathrooms}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <label className="form-label fw-semibold">Area (Sq Ft)</label>
                            <div className="input-group">
                                <span className="input-group-text bg-light border-0"><FontAwesomeIcon icon={faRulerCombined} /></span>
                                <input
                                    type="number"
                                    name="area"
                                    className="form-control bg-light border-0"
                                    value={formData.area}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="col-12">
                            <label className="form-label fw-semibold">Description</label>
                            <textarea
                                name="description"
                                className="form-control bg-light border-0"
                                rows="4"
                                placeholder="Describe the property features, neighborhood, etc."
                                value={formData.description}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="col-12">
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleMediaChange}
                                style={{ display: 'none' }}
                                multiple
                                accept="image/*,video/*"
                            />

                            {selectedMedia.length > 0 && (
                                <div className="media-preview-grid row g-3 mb-4">
                                    {selectedMedia.map((item) => (
                                        <div key={item.id} className="col-md-3 col-6">
                                            <div className="media-preview-item position-relative rounded-4 overflow-hidden border">
                                                <button
                                                    type="button"
                                                    className="remove-media-btn position-absolute top-0 end-0 m-2 border-0 bg-white rounded-circle text-danger shadow-sm"
                                                    onClick={() => removeMedia(item.id)}
                                                    style={{ width: '28px', height: '28px', zIndex: 5 }}
                                                >
                                                    <FontAwesomeIcon icon={faTimesCircle} />
                                                </button>
                                                {item.type === 'image' ? (
                                                    <img src={item.preview} alt="preview" className="w-100 h-100 object-fit-cover" style={{ height: '150px' }} />
                                                ) : (
                                                    <div className="position-relative h-100" style={{ height: '150px' }}>
                                                        <video src={item.preview} className="w-100 h-100 object-fit-cover" />
                                                        <div className="position-absolute top-50 start-50 translate-middle text-white opacity-75">
                                                            <FontAwesomeIcon icon={faPlayCircle} size="2x" />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div
                                className="image-upload-zone p-5 text-center bg-light rounded-4 border-dashed cursor-pointer"
                                onClick={triggerFileInput}
                            >
                                <FontAwesomeIcon icon={faCloudUploadAlt} size="3x" className="mb-3 text-primary opacity-50" />
                                <p className="mb-0 fw-semibold">Click to upload property pictures or videos</p>
                                <small className="text-muted">Images and Videos allowed (Max 5MB per file)</small>
                            </div>
                        </div>

                        <div className="col-12 mt-4">
                            <button type="submit" className="btn btn-primary btn-lg w-100 py-3 rounded-4 fw-bold">
                                Publish Property
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadProperty;
