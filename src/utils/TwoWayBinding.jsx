export const handleInputChange = (formData, setFormData) => (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
};