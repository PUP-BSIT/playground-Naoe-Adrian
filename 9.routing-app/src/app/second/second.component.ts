import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ParamMap } from '@angular/router';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  id = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = this.route.snapshot.paramMap.get('id') || '';
    });

    this.loadRegions();
  }

  async loadRegions() {
    const dropdown = document.getElementById('region') as HTMLSelectElement;
    dropdown.innerHTML = '<option selected="true" disabled>Choose Region</option>';

    const data = await this.http.get<any[]>('./ph-json/region.json').toPromise();
    data.forEach(entry => {
      const option = document.createElement('option');
      option.value = entry.region_code;
      option.text = entry.region_name;
      dropdown.add(option);
    });
  }

  async fillProvinces(regionCode: string) {
    const regionText = (document.getElementById('region') as HTMLSelectElement).selectedOptions[0].text;
    (document.getElementById('region-text') as HTMLInputElement).value = regionText;
    (document.getElementById('province-text') as HTMLInputElement).value = '';
    (document.getElementById('city-text') as HTMLInputElement).value = '';
    (document.getElementById('barangay-text') as HTMLInputElement).value = '';

    const provinceDropdown = document.getElementById('province') as HTMLSelectElement;
    provinceDropdown.innerHTML = '<option selected="true" disabled>Choose State/Province</option>';
    const cityDropdown = document.getElementById('city') as HTMLSelectElement;
    cityDropdown.innerHTML = '<option selected="true" disabled>Choose city/municipality</option>';
    const barangayDropdown = document.getElementById('barangay') as HTMLSelectElement;
    barangayDropdown.innerHTML = '<option selected="true" disabled>Choose barangay</option>';

    const data = await this.http.get<any[]>('./ph-json/province.json').toPromise();
    const result = data.filter(entry => entry.region_code === regionCode);
    result.sort((a, b) => a.province_name.localeCompare(b.province_name));

    result.forEach(entry => {
      const option = document.createElement('option');
      option.value = entry.province_code;
      option.text = entry.province_name;
      provinceDropdown.add(option);
    });
  }

  async fillCities(provinceCode: string) {
    const provinceText = (document.getElementById('province') as HTMLSelectElement).selectedOptions[0].text;
    (document.getElementById('province-text') as HTMLInputElement).value = provinceText;
    (document.getElementById('city-text') as HTMLInputElement).value = '';
    (document.getElementById('barangay-text') as HTMLInputElement).value = '';

    const cityDropdown = document.getElementById('city') as HTMLSelectElement;
    cityDropdown.innerHTML = '<option selected="true" disabled>Choose city/municipality</option>';
    const barangayDropdown = document.getElementById('barangay') as HTMLSelectElement;
    barangayDropdown.innerHTML = '<option selected="true" disabled>Choose barangay</option>';

    const data = await this.http.get<any[]>('./ph-json/city.json').toPromise();
    const result = data.filter(entry => entry.province_code === provinceCode);
    result.sort((a, b) => a.city_name.localeCompare(b.city_name));

    result.forEach(entry => {
      const option = document.createElement('option');
      option.value = entry.city_code;
      option.text = entry.city_name;
      cityDropdown.add(option);
    });
  }

  async fillBarangays(cityCode: string) {
    const cityText = (document.getElementById('city') as HTMLSelectElement).selectedOptions[0].text;
    (document.getElementById('city-text') as HTMLInputElement).value = cityText;
    (document.getElementById('barangay-text') as HTMLInputElement).value = '';

    const barangayDropdown = document.getElementById('barangay') as HTMLSelectElement;
    barangayDropdown.innerHTML = '<option selected="true" disabled>Choose barangay</option>';

    const data = await this.http.get<any[]>('./ph-json/barangay.json').toPromise();
    const result = data.filter(entry => entry.city_code === cityCode);
    result.sort((a, b) => a.brgy_name.localeCompare(b.brgy_name));

    result.forEach(entry => {
      const option = document.createElement('option');
      option.value = entry.brgy_code;
      option.text = entry.brgy_name;
      barangayDropdown.add(option);
    });
  }

  onchangeBarangay() {
    const barangayText = (document.getElementById('barangay') as HTMLSelectElement).selectedOptions[0].text;
    (document.getElementById('barangay-text') as HTMLInputElement).value = barangayText;
  }
}
