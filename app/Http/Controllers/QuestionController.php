<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    public function index(Request $request)
    {
        return inertia('Backend/Question/Index', [
            'list' => Question::query()->get(),
        ]);
    }

    public function create(Request $request)
    {
        return inertia('Backend/Question/Create');
    }

    public function edit(Request $request, Question $question)
    {
        return inertia('Backend/Question/Edit', [
            'item'=>$question
        ]);
    }

    public function store(Request $request)
    {

        $data=$this->validate($request, [
            'question' => 'required',
            'answer' => 'required:numeric',
        ]);
        Question::query()->create($data);
        session()->flash('flash-message',[
            'message'=>'Question Created Successfully',
            'type'=>'positive'
        ]);
        return to_route('question.index');

    }

    public function update(Request $request, Question $question)
    {
        $data=$this->validate($request, [
            'question' => 'required',
            'answer' => 'required'
        ]);
        $question->update($data);
        session()->flash('flash-message',[
            'message'=>'Question Updated Successfully',
            'type'=>'positive'
        ]);
        return to_route('question.index');
    }

    public function destroy(Request $request,Question $question)
    {
        $question->delete();
        session()->flash('flash-message',[
            'message'=>'Question Deleted Successfully',
            'type'=>'positive'
        ]);
        return to_route('question.index');
    }
}
