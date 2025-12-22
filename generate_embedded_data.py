import os
import json


def build_embedded_data(root: str = "data") -> dict:
    embedded: dict = {}

    for lang in os.listdir(root):
        lang_path = os.path.join(root, lang)
        if not os.path.isdir(lang_path):
            continue

        embedded.setdefault(lang, {})

        for main in os.listdir(lang_path):
            main_path = os.path.join(lang_path, main)
            if not os.path.isdir(main_path):
                continue

            embedded[lang].setdefault(main, {})

            for sub in os.listdir(main_path):
                sub_path = os.path.join(main_path, sub)
                if not os.path.isdir(sub_path):
                    continue

                embedded[lang][main].setdefault(sub, {})

                for fname in os.listdir(sub_path):
                    if not fname.lower().endswith(".json"):
                        continue

                    fpath = os.path.join(sub_path, fname)
                    with open(fpath, "r", encoding="utf-8-sig") as f:
                        try:
                            data = json.load(f)
                        except Exception as e:
                            raise SystemExit(f"Error parsing {fpath}: {e}")

                    embedded[lang][main][sub][fname] = data

    return embedded


def write_embedded_js(embedded: dict, out_path: str = os.path.join("assets", "embedded-data.js")) -> None:
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("// AUTO-GENERATED FROM data DIRECTORY. DO NOT EDIT MANUALLY.\n")
        f.write("window.EMBEDDED_DATA = ")
        json.dump(embedded, f, ensure_ascii=False, indent=2)
        f.write(";\n")


if __name__ == "__main__":
    data = build_embedded_data("data")
    write_embedded_js(data)
    print("Wrote assets/embedded-data.js with embedded JSON data.")


