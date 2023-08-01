
from flask import Flask, request, redirect, session, url_for, render_template
from flask_oauthlib.client import OAuth

app = Flask(__name__)
app.secret_key = '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'

oauth = OAuth(app)

github = oauth.remote_app(
    'github',
    consumer_key='14048e601e67f174b209',
    consumer_secret='b507ec46c607f1e8c07b6c0f6f44aed478080e18',
    request_token_params={'scope': 'user:email'},
    base_url='https://api.github.com/',
    request_token_url=None,
    access_token_url='https://github.com/login/oauth/access_token',
    authorize_url='https://github.com/login/oauth/authorize'
)

@app.route('/')
def index():
    if 'github_token' in session:
        return redirect(url_for('repositories'))
    return render_template('index.html')

@app.route('/github/login')
def github_login():
    return github.authorize(callback=url_for('github_authorized', _external=True))

@app.route('/github/authorized')
def github_authorized():
    resp = github.authorized_response()
    if resp is None or 'access_token' not in resp:
        return 'Access denied: reason={0} error={1}'.format(request.args['error'], request.args['error_description'])
    session['github_token'] = (resp['access_token'], '')
    return redirect(url_for('repositories'))

@app.route('/github/repositories')
def repositories():
    if 'github_token' not in session:
        return redirect(url_for('github_login'))
    headers = {'Authorization': 'Bearer ' + session['github_token'][0]}
    response = github.get('user/repos', headers=headers)
    repositories = response.data  # access the response data directly
    return render_template('repositories.html', repositories=repositories)

@github.tokengetter
def get_github_token():
    if 'github_token' in session:
        return session['github_token']


if __name__ == '__main__':
    app.run(debug=True)

