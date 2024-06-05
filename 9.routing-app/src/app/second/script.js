document.addEventListener("DOMContentLoaded", function() {
    loadRegions();
  
    document.getElementById('region').addEventListener('change', fillProvinces);
    document.getElementById('province').addEventListener('change', fillCities);
    document.getElementById('city').addEventListener('change', fillBarangays);
    document.getElementById('barangay').addEventListener('change', onchangeBarangay);
  });
  
  async function loadRegions() {
    const dropdown = document.getElementById('region');
    dropdown.innerHTML = '<option selected="true" disabled>Choose Region</option>';
  
    const response = await fetch('./ph-json/region.json');
    const data = await response.json();
  
    data.forEach(entry => {
      const option = document.createElement('option');
      option.value = entry.region_code;
      option.text = entry.region_name;
      dropdown.add(option);
    });
  }
  
  async function fillProvinces() {
    const regionCode = document.getElementById('region').value;
    const regionText = document.getElementById('region').selectedOptions[0].text;
    document.getElementById('region-text').value = regionText;
    document.getElementById('province-text').value = '';
    document.getElementById('city-text').value = '';
    document.getElementById('barangay-text').value = '';
  
    const provinceDropdown = document.getElementById('province');
    provinceDropdown.innerHTML = '<option selected="true" disabled>Choose State/Province</option>';
    const cityDropdown = document.getElementById('city');
    cityDropdown.innerHTML = '<option selected="true" disabled>Choose city/municipality</option>';
    const barangayDropdown = document.getElementById('barangay');
    barangayDropdown.innerHTML = '<option selected="true" disabled>Choose barangay</option>';
  
    const response = await fetch('./ph-json/province.json');
    const data = await response.json();
  
    const result = data.filter(entry => entry.region_code === regionCode);
    result.sort((a, b) => a.province_name.localeCompare(b.province_name));
  
    result.forEach(entry => {
      const option = document.createElement('option');
      option.value = entry.province_code;
      option.text = entry.province_name;
      provinceDropdown.add(option);
    });
  }
  
  async function fillCities() {
    const provinceCode = document.getElementById('province').value;
    const provinceText = document.getElementById('province').selectedOptions[0].text;
    document.getElementById('province-text').value = provinceText;
    document.getElementById('city-text').value = '';
    document.getElementById('barangay-text').value = '';
  
    const cityDropdown = document.getElementById('city');
    cityDropdown.innerHTML = '<option selected="true" disabled>Choose city/municipality</option>';
    const barangayDropdown = document.getElementById('barangay');
    barangayDropdown.innerHTML = '<option selected="true" disabled>Choose barangay</option>';
  
    const response = await fetch('./ph-json/city.json');
    const data = await response.json();
  
    const result = data.filter(entry => entry.province_code === provinceCode);
    result.sort((a, b) => a.city_name.localeCompare(b.city_name));
  
    result.forEach(entry => {
      const option = document.createElement('option');
      option.value = entry.city_code;
      option.text = entry.city_name;
      cityDropdown.add(option);
    });
  }
  
  async function fillBarangays() {
    const cityCode = document.getElementById('city').value;
    const cityText = document.getElementById('city').selectedOptions[0].text;
    document.getElementById('city-text').value = cityText;
    document.getElementById('barangay-text').value = '';
  
    const barangayDropdown = document.getElementById('barangay');
    barangayDropdown.innerHTML = '<option selected="true" disabled>Choose barangay</option>';
  
    const response = await fetch('./ph-json/barangay.json');
    const data = await response.json();
  
    const result = data.filter(entry => entry.city_code === cityCode);
    result.sort((a, b) => a.brgy_name.localeCompare(b.brgy_name));
  
    result.forEach(entry => {
      const option = document.createElement('option');
      option.value = entry.brgy_code;
      option.text = entry.brgy_name;
      barangayDropdown.add(option);
    });
  }
  
  function onchangeBarangay() {
    const barangayText = document.getElementById('barangay').selectedOptions[0].text;
    document.getElementById('barangay-text').value = barangayText;
  }
