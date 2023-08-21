<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\TryCatch;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Post::all();
        if($data == null) {
            return response()->json([
                'message' => 'Data empty'
            ]);
        }
        return response()->json([
            'message' => 'success',
            'data' => $data
        ],200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
            'author' => 'required'
        ]);
        
        $data = Post::create([
            'title' => $request->title,
            'content' => $request->content,
            'author' => $request->author
        ]);

        return response()->json([
            'message' => 'success',
            'data' => $data
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = Post::where('id', $id)->get();
        return response()->json([
            'message' => 'success',
            'data' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
            'author' => 'required'
        ]);

        $data = Post::where('id', $id)->update([
            'title' => $request->title,
            'content' => $request->content,
            'author' => $request->author
        ]);

        return response()->json([
            'message' => 'data has been updated',
            'data' => $data
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            Post::find($id)->delete();
            return response()->json([
                'message' => 'data has been deleted'
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'failed',
                'message' => $th
            ]);
        }
    }
}
