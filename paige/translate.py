# Setup:
# python3 -m venv ./venv
# bash
# source ./venv/bin/activate
# pip3 install pyyaml
# python3 translate.py

import os
import yaml

def process_data(filename, data):
    pass

def process_file(filename):
    with open(filename, 'r', encoding='utf-8') as file:
        data = yaml.safe_load(file)
    if not isinstance(data, dict):
        raise ValueError(f"{filename} must be an object")
    process_data(filename, data)
    sorted_keys = sorted(data.keys())
    sorted_data = {key: data[key] for key in sorted_keys}
    sorted_yaml = yaml.dump(
        sorted_data,
        allow_unicode=True,
        default_flow_style=False,
        sort_keys=False,
    )
    with open(filename, 'w', encoding='utf-8') as file:
        file.write(sorted_yaml)

def process_files():
    for filename in os.listdir():
        if filename.endswith('.yaml'):
            process_file(filename)

if __name__ == "__main__":
    process_files()
