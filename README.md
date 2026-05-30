LIVE LINK : https://chess-ai-2-35h2.onrender.com/


# Chess Llama (Chess AI)

Welcome to **Chess Llama**, an intelligent Chess AI application leveraging a local autoregressive language model (LLM) for move prediction and an advanced, modern React frontend. This project tracks user stats, game history, and dynamically computes player analytics (such as "Tactical Aggression" and "Positional Patience") using MongoDB.

## Features

- **LLM-Based Chess Engine**: Unlike traditional alphabeta-search engines, this backend predicts chess moves purely using transformer-based causal language modeling. It uses a custom bidirectional search alongside `python-chess` for valid move generation.
- **Modern React Frontend**: A beautiful, fluid UI built with React 19, Vite, Tailwind CSS, and `react-chessboard`.
- **In-Depth Player Analytics**: Tracks "Tactical DNA", Elo points progression, calculation depth, king safety, and positional play metrics based on match data.
- **RESTful Flask Backend**: Python Flask API to handle authentication, game updates, and move requests seamlessly over CORS.

## Project Structure

- `backend/`: Contains the core Flask API (`app.py`), the `transformers` and `torch` integration for making moves, and PyMongo connections.
  - Requires the LLaMA model files to be situated in `vishy_trans/`.
- `frontend/`: A Vite + React web application handling the interactive chessboard and dashboard interfaces.

## Prerequisites

- **Python 3.10+** (or compatible)
- **Node.js (LTS recommended)**
- **MongoDB**: You will need a valid MongoDB connection string (set via `MONGODB_URI` environment variable, or use the fallback structure in the app).

## Installation & Setup

### 1. Backend Setup

```bash
cd backend
# Create a virtual environment
python -m venv .venv
source .venv/bin/activate  # Or `.venv\Scripts\activate` on Windows

# Install Python dependencies
pip install -r requirements.txt
```

> **Note**: Ensure that the language model files (e.g. `config.json`, `pytorch_model.bin` or `model.safetensors`, tokenizer files) are downloaded into the `vishy_trans` directory.

To run the backend server:

```bash
# Starts the Flask API on port 5000 (default)
python -m flask run
```

### 2. Frontend Setup

```bash
cd frontend

# Install Node modules
npm install

# Start the Vite development server
npm run dev
```

The frontend will be available at `http://localhost:5173`.

## Architecture Details

- **Move Generation**: The LLaMA model considers the sequence of previous moves (UCI format) to predict the next logical move. A bidirectional search ensures the AI finds the highest confidence legal move, with an adjustable "difficulty" parameter that shapes the model's sub-optimal choices.
- **Database**: Stores users incrementally by "username_key". All the metrics, openings stats, win/loss history, and durations are persisted and dynamically updated after each match.
