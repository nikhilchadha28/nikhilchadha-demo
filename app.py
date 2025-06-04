from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='.', static_url_path='')

@app.route('/')
def index():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    # Run the development server
    app.run(debug=True)
