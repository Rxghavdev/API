# <div align="center"><big>**Quote App**</big></div>

## <div align="center">Description</div>

<p align="center">This repository contains a Quote App, which allows users to retrieve facts, posts, and images. The app provides endpoints for fetching random facts, posts, and images from the server. This readme will guide you through the usage of these routes and the structure of the project.</p>

## <div align="center">Getting Started</div>

### <div align="center">Prerequisites</div>

<p align="center">Before running this project, make sure you have the following prerequisites:</p>

- Node.js (version >= 12)
- MongoDB (local installation or cloud-hosted instance)

### <div align="center">Installation</div>

<ol align="center">
  <li>Clone the repository:</li>
</ol>


<ol align="center" start="2">
  <li>Navigate to the project directory:</li>
</ol>


<ol align="center" start="3">
  <li>Install the dependencies:</li>
  npm install
</ol>

### <div align="center">Configuration</div>

<ol align="center">
  <li>Create a `.env` file in the root directory and set the following environment variables:</li>
              
</ol>
                       PORT=3000 # Port number on which the server will run
              MONGO_URI=your-mongodb-connection-string # MongoDB

### <div align="center">Running the Server</div>

<p align="center">Start the backend server with the following command:</p>

                                   npm start

  
<p align="center">The server will be up and running on the specified port (default: 3000).</p>

## <div align="center">API Endpoints</div>

<p align="center">The Quote App provides the following endpoints to fetch facts, posts, and images:</p>

- `/getFacts` - Retrieves random facts.
- `/postFacts` - posts random facts.
- `/getImages` - Retrieves random images.

### <div align="center">Example Usage</div>

<p align="center"><b>Get Random Facts:</b></p>

<p align="center">Request:</p>



## <div align="center">Contributing</div>

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## <div align="center">License</div>

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## <div align="center">Copyright Notice</div>

© 2023 Rxghavdev. All Rights Reserved.

The content of this repository, including but not limited to text, graphics, code, and images, is the property of YourName and is protected by applicable intellectual property laws. Unauthorized reproduction, modification, or distribution of this content is strictly prohibited.

This README template is provided as a starting point to create a README for your own project and is subject to change. You may modify it to suit your project's specific needs.

For any inquiries or questions regarding the use of the content in this repository, please contact YourEmail.
