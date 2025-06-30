<?php

use App\Enums\SummaryStatus;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('summaries', static function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class)->index()->constrained()->cascadeOnDelete();
            $table->string('title');
            $table->text('content');
            $table->text('original_content')->nullable();
            $table->string('file_path')->nullable();
            $table->string('file_type')->nullable(); // pdf, docx, mp4, etc.
            $table->integer('word_count')->default(0);
            $table->json('metadata')->nullable(); // AI processing metadata
            $table->string('status')->default(SummaryStatus::PROCESSING->value)->index();
            $table->timestamp('processed_at')->nullable();
            $table->timestamps();
            $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('summaries');
    }
};
