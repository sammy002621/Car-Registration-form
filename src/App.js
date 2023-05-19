import React, { useState } from 'react';
import './App.css'
const CarSellForm = () => {
  const [formData, setFormData] = useState({
    carMake: '',
    carModel: '',
    year: '',
    mileage: '',
    condition: 'Excellent',
    features: [],
    transmission: 'Automatic',
    priceRange: 0,
    contactNumber: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    let updatedFeatures = [...formData.features];
    if (checked) {
      updatedFeatures.push(name);
    } else {
      updatedFeatures = updatedFeatures.filter((feature) => feature !== name);
    }
    setFormData((prevData) => ({ ...prevData, features: updatedFeatures }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log(formData);
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (formData.carMake.trim() === '') {
      errors.carMake = 'Car Make is required';
    }
    if (formData.carModel.trim() === '') {
      errors.carModel = 'Car Model is required';
    }
    if (formData.year === '') {
      errors.year = 'Year is required';
    }
    if (formData.mileage === '') {
      errors.mileage = 'Mileage is required';
    }
    if (formData.condition === '') {
      errors.condition = 'Condition is required';
    }
    if (formData.features.length === 0) {
      errors.features = 'At least one feature must be selected';
    }
    if (formData.transmission === '') {
      errors.transmission = 'Transmission is required';
    }
    if (formData.priceRange === '') {
      errors.priceRange = 'Price Range is required';
    }
    if (formData.contactNumber.trim() === '') {
      errors.contactNumber = 'Contact Number is required';
    }
    return errors;
  };

  return (
    <div className='container'>
      <div className='container1'>
<div className='container2'>
<form onSubmit={handleSubmit}>
  <h2>Car Registration Form</h2>
      <label>
        Car Make:
        <br /> <br />
        <input
          type="text"
          name="carMake"
          value={formData.carMake}
          onChange={handleInputChange}
          className='input'
          placeholder='Enter car make'
        />
        {formErrors.carMake && <span className="error">{formErrors.carMake}</span>}
      </label>
      <br />
      <label className='label'>
        Car Model:
        <br /> <br />
        <input
          type="text"
          name="carModel"
          value={formData.carModel}
          onChange={handleInputChange}
          className='input'
          placeholder='Enter your car model'
        />
         {formErrors.carModel && <span className="error">{formErrors.carModel}</span>}
      </label>
      <br />

      <label className='label'>
        Year:
        <br /> <br />
        <input
          type="date"
          name="year"
          value={formData.year}
          onChange={handleInputChange}
          className='input'
         
        />
         {formErrors.carMake && <span className="error">{formErrors.carMake}</span>}
      </label>
      <br />

      <label className='label'>
        Mileage:
        <br /> <br />
        <input
          type="number"
          name="mileage"
          value={formData.mileage}
          onChange={handleInputChange}
          className='input'
          placeholder='Enter your mileage'
        />
         {formErrors.mileage && <span className="error">{formErrors.mileage}</span>}
      </label>
      <br />

      <div className='both'>
      <div className='condition'>
  
  <label>
          Condition:
          <br /> 
          </label>
          <input
              type="radio"
              name="condition"
              value="Excellent"
              checked={formData.condition === 'Excellent'}
              onChange={handleInputChange}
            />
          <label>
            Excellent
          
  
          </label>
          <br />
          <label>
          <input
              type="radio"
              name="condition"
              value="Good"
              checked={formData.condition === 'Good'}
              onChange={handleInputChange}
            />
            Good
          </label>
          <br />
          <input
              type="radio"
              name="condition"
              value="Fair"
              checked={formData.condition === 'Fair'}
              onChange={handleInputChange}
            />
          <label>
            Fair
          </label>
          <br />
          <input
              type="radio"
              name="condition"
              value="Poor"
              checked={formData.condition === 'Poor'}
              onChange={handleInputChange}
            />
          <label>
            Poor
            </label>
        <br />
  </div>
  
  <div className='features'>
  <label>
          Features:
          <br /> 
          <input
              type="checkbox"
              name="Air Conditioning"
              checked={formData.features.includes('Air Conditioning')}
              onChange={handleCheckboxChange}
            />
          <label>
            Air Conditioning
          </label>

          <br />
          <input
              type="checkbox"
              name="Power Steering"
              checked={formData.features.includes('Power Steering')}
              onChange={handleCheckboxChange}
            />
          <label>
            Power Steering
          </label>
          <br />
          <input
              type="checkbox"
              name="Power Windows"
              checked={formData.features.includes('Power Windows')}
              onChange={handleCheckboxChange}
            />
          <label>
            Power Windows
          </label>

          <br />
          <input
              type="checkbox"
              name="ABS"
              checked={formData.features.includes('ABS')}
              onChange={handleCheckboxChange}
            />
          <label>
            ABS
          </label>
          <br />
          <input
              type="checkbox"
              name="Navigation System"
              checked={formData.features.includes('Navigation System')}
              onChange={handleCheckboxChange}
            />
             {formErrors.features&& <span className="error">{formErrors.features}</span>}
          <label>
            Navigation System
          </label>
        </label>
        <br />
  </div>
      </div>

   

      <label>
        Transmission:
        <select
          name="transmission"
          value={formData.transmission}
          onChange={handleInputChange}
          className='select'
        >
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
        {formErrors.transmission && <span className="error">{formErrors.transmission}</span>}
      </label>
      <br />

      <label>
        Price Range:
        <input
          type="range"
          name="priceRange"
          min="0"
          max="100000"
          step="1000"
          value={formData.priceRange}
          onChange={handleInputChange}
          className='price'
        />
         {formErrors.priceRange && <span className="error">{formErrors.priceRange}</span>}
      </label>
      <br />

      <label>
        Contact Number:
        <br /> <br />
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleInputChange}
          className='input'
          placeholder='Enter your phone number'
        />
         {formErrors.contactNumber && <span className="error">{formErrors.contactNumber}</span>}
      </label>
      <br />

      <button type="submit" className='submit'>Submit</button>
    </form>
</div>
      </div>
      
 
    </div>
   
  );
};

export default CarSellForm;
